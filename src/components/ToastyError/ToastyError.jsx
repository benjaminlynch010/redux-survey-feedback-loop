import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastyError() {
  const showError = () => {
    toast.error("An error occurred!", {
      position: "top-right",
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <button onClick={showError}>Show Error</button>
      <ToastContainer />
    </div>
  );
}

export default ToastyError