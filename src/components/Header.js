import theImage from "./my-image.jpg";

const myImage = {
  position: "relative",
  height: 200,
  width: "100%",
};
const Header = () => {
  return <img src={theImage} style={myImage} />;
};

export default Header;
