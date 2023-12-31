import { useNavigate } from "react-router-dom";
import notFoundPhoto from '../../../src/assets/sportsImage/tennisjpg.jpg'
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="mt-5 mb-20">
       <div className=" w-60 mx-auto round-full">
<iframe className="mx-auto w-full rounded-full" src="https://embed.lottiefiles.com/animation/81215"></iframe>
</div>
 <h2 className="font-bold text-center text-red-700 text-7xl">404</h2>
      <p className="my-3 text-xl font-semibold text-center text-amber-600">
        This Page Not Found
      </p>
      <div className="mt-5 text-center">
        <button className="px-5 py-2 text-lg font-bold border-2 border-gray-400 rounded-full flex items-center mx-auto" onClick={handleBackHome}>
        <FaArrowLeft className="mr-2"></FaArrowLeft> Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
