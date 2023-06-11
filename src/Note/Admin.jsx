   // cart Collection apis

    app.get("/carts", async (req, res) => {
      const email = req.query.email;

      if (!email) {
        return res.send([]);
      }
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      return res.send(result);
    });

    app.get("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.findOne(query);
      res.send(result);
    });

    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/carts", async (req, res) => {
      const item = req.body;

      const query = { selectClassId: item.selectClassId };
      const existingCart = await cartCollection.findOne(query);

      if (existingCart) {
        return res.send({ message: "user already exists" });
      }

      const result = await cartCollection.insertOne(item);
      return res.send(result);
    });

    // create payment intent
    app.post("/create-payment-intent", verifyJWT, async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    app.post("/payments", verifyJWT, async (req, res) => {
      const payment = req.body;

      const id = payment.id;
      console.log(id);
      const filter = { id: id };
      const query = {
        _id: new ObjectId(id),
      };
      const existingPayment = await paymentCollection.findOne(filter);
      if (existingPayment) {
        return res.send({ message: "Already Enrolled This Class" })
      }


      const insertResult = await paymentCollection.insertOne(payment);


      const deleteResult = await cartCollection.deleteOne(query);

      return res.send({ insertResult, deleteResult });
    });

    app.patch("/all-classes/seats/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const updateClass = await classesCollection.findOne(filter);
      if (!updateClass) {
        // Handle case when the seat is not found
        console.log("Seat not found");
        return;
      }
      const updateEnrollStudent = updateClass.student + 1;
      const updatedAvailableSeats = updateClass.seats - 1;
      const update = {
        $set: {
          seats: updatedAvailableSeats,
          student: updateEnrollStudent,
        },
      };
      const result = await classesCollection.updateOne(filter, update);
      res.send(result);
    });
    app.get('/payments', async (req, res) => {
      const result = await paymentCollection.find().toArray()
      res.send(result);
    })


// payment compo
import React from "react";
import DashboardCover from "../../../DashboardCover/DashboardCover";
import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const selectClass = useLoaderData();
  console.log(selectClass);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div className='w-full'>
      <Helmet>
        <title>Sports Avademy | Payment</title>
      </Helmet>
      <DashboardCover title='Payment'></DashboardCover>
      <h2 className='text-3xl'> Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={selectClass.price}
          id={selectClass._id}
          selectClassId={selectClass.selectClassId}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;