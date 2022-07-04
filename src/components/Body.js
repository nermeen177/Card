import React from "react";

const txt = {
  color: "#bfbdce",
  lineHeight: 1.2,
  position: "relative",
  bottom: 15,
};
const Main = () => {
  return (
    <div style={{ padding: 17 }}>
      <h4 style={{ color: "#fada6d" }}>About</h4>
      <p style={txt}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout,There are many
        variations of passages of Lorem Ipsum available.
      </p>
    </div>
  );
};

export default Main;
