import MenuId from "../../components/MenuId/MenuId";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import "./Details.scss";

function Details() {
  return (
    <div className="detail">
      <MenuId />
      <QuantitySelector />
    </div>
  );
}

export default Details;
