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
            ? "icon-chevron css-1apc7vz is--down"
            : "icon-chevron css-1apc7vz is--up"
        }
        onClick={handleOnClick}
      ></div>
    </div>
  );
}

export default Ichonveron;
