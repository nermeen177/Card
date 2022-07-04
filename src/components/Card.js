import "./Card.css";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import Main from "./Body";

const Card = () => {
  return (
    <div className="card">
      <Header />
      <Info />
      <Main />
      <Footer />
    </div>
  );
};

export default Card;
