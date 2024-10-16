import Layout from "../layouts/layout";
import img1 from "../assets/img/happy-cat.gif";
import { FaHeart, FaStar, FaRibbon } from "react-icons/fa"; // Import icons from react-icons
import "../components/styles/Thankyou.css";
import { useEffect, useState } from "react";

const Thankyou = () => {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    // Retrieve and parse the date and time from localStorage
    const storedDateTime = localStorage.getItem("dateTime");
    if (storedDateTime) {
      setDateTime(JSON.parse(storedDateTime));
    }

    const icons = document.querySelectorAll(".icon-random");
    icons.forEach((icon) => {
      const randomTop = Math.floor(Math.random() * 80); // Random top percentage
      const randomLeft = Math.floor(Math.random() * 80); // Random left percentage
      (icon as HTMLElement).style.top = `${randomTop}%`;
      (icon as HTMLElement).style.left = `${randomLeft}%`;
    });
  }, []);

  return (
    <Layout>
      <div className="thankyou-container">
        <div className="icon-container">
          <FaHeart className="heart-icon" />
          <FaStar className="star-icon" />
          <FaRibbon className="ribbon-icon" />
        </div>
        <img
          className="thankyou-image"
          src={img1}
          alt="Happy Cat"
          style={{
            width: "300px",
            marginBottom: "20px",
            borderRadius: "15px",
            boxShadow: "0 0 20px pink",
          }}
        />
        <h2 style={{ fontSize: "4rem" }} className="thankyou-text">
          Hẹn gặp lại!❤️
        </h2>
        {dateTime.date && dateTime.time && (
          <h1 className="thankyou-text">
            Nhớ đừng trễ hẹn vào ngày {dateTime.date} lúc {dateTime.time} nhé (ㅅ´ ˘ `)♡ .
          </h1>
        )}
        <div className="icon-container-bottom">
          <FaHeart className="heart-icon-bottom icon-random" />
          <FaStar className="star-icon-bottom icon-random" />
          <FaRibbon className="ribbon-icon-bottom icon-random" />
          <FaHeart className="heart-icon-bottom icon-random" />
          <FaStar className="star-icon-bottom icon-random" />
          <FaRibbon className="ribbon-icon-bottom icon-random" />
          <FaHeart className="heart-icon-bottom icon-random" />
          <FaStar className="star-icon-bottom icon-random" />
          <FaRibbon className="ribbon-icon-bottom icon-random" />
        </div>
      </div>
    </Layout>
  );
};

export default Thankyou;
