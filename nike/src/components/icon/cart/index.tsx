import { BsBag } from "react-icons/bs";
import "./index.scss";
export const Cart = () => {
  return (
    <div className="iconCart">
      <BsBag className="iconCart-icon" />
      <div className="iconCart-amount">12</div>
    </div>
  );
};
