import React from "react";
import { FaEnvelope } from "react-icons/fa";

const txt = {
  textAlign: "center",
  lineHeight: 0.5,
};
const but = {
  width: "85%",
  padding: 10,
  borderRadius: 10,
  border: "none",
  textAlign: "center",
};
const icon = {
  fontSize: 17,
  marginRight: 7,
  position: "relative",
  top: 2,
};

const Info = () => {
  return (
    <div style={txt}>
      <h3 style={{ color: "white" }}>Nermeen Mamdouh</h3>
      <p style={{ color: "#fada6d" }}>Frontend developer</p>
      <br /> <br />
      <button style={but}>
        <FaEnvelope style={icon} />
        <span style={{ fontSize: 16 }}>Email</span>
      </button>
    </div>
  );
};

export default Info;
