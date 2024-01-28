import Navbar from "../../navbar/Navbar.jsx";
import DetailTop from "./DetailTop.jsx";
import DetailPhotos from "./DetailPhotos.jsx";
import DetailDesc from "./DetailDesc.jsx";
import DetailPrice from "./DetailPrice.jsx";
import Contact from "../../contact/Contact.jsx";
import Footer from "../../footer/Footer.jsx";

import "./Detail.css";

const Detail = () => {

  const detail_data = require("./detail.json");

  return (
    <div>
      <Navbar />
      <div className="container detail-content">
        <DetailTop item={detail_data} />
        <DetailPhotos photos={detail_data.photos} />
        <DetailDesc desc={detail_data} />
        <DetailPrice nineNightPrice={detail_data.nine_night_price} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Detail;
