import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./iconChevron.css";
function Ichonveron() {
  const [state, setState] = useState(true);
  const handleOnClick = () => {
    setState(!state);
  };
  return (
    <div>
      <div
        className={
          state === true
            ? "icon-chevron css-1apc7vz is--up"
            : "icon-chevron css-1apc7vz is--down"
        }
        onClick={handleOnClick}
      ></div>
    </div>
  );
}

export default Ichonveron;
