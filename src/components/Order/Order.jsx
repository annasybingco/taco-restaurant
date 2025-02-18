import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();
  const photo = location.state?.photo; // Retrieve passed state

  return (
    <div>
      <h1>Order Page</h1>
      {photo && <img src={photo} alt="Ordered item" />}
    </div>
  );
}

export default Order;
