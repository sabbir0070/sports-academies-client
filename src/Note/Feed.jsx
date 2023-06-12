const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


const [modalOpen, setModalOpen] = useState(false);
      
      const sendFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback =form.feedback.value;
        const requestBody = {
            feedback: feedback // Wrap the feedback value inside an object property
          };
        
       console.log(feedback)
       fetch(`https://sports-academies-server-nine.vercel.app/addClasses/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.modifiedCount) {
            form.reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Class Approved!' ,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
       
      };