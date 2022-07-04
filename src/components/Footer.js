const foot = {
  height: 40,
  width: "100%",
  backgroundColor: "#0f0f11",
  textAlign: "center",
  position: "absolute",
  bottom: 0,
  padding: 5,
};

const txt = {
  color: "#fada6d",
  fontSize: 13,
};
const Footer = () => {
  return (
    <div style={foot}>
      <p style={txt}>@Copyright 2022 fcih.All rights Reserved.</p>
    </div>
  );
};
export default Footer;
