import { useEffect, useState } from "react";
import HeartButton from "../components/HeartButton/HeartButton";
import Layout from "../layouts/layout";
import img1 from "../assets/img/cat-catcry.gif";
import img2 from "../assets/img/sad-sad-cat.gif";
import img3 from "../assets/img/sadcat.gif";
import img4 from "../assets/img/smile-cat.gif";
import HeartButtonNo from "../components/HeartButtonNo/HeartButton";
import { pink } from "../components/interfaces/HeartButton.interface";
import { useNavigate } from "react-router";
import "../components/styles/Home.styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(-1);
  const [buttonYes, setButtonYes] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleNoClick = () => {
    if (imageIndex < 2) {
      setImageIndex(imageIndex + 1);
      setScale(scale + 0.5);
    }
  };

  const handleYesClick = () => {
    setButtonYes(true);
    setScale(1);
  };

  const getMessage = () => {
    switch (imageIndex) {
      case 0:
        return "Really? You're breaking my heart!";
      case 1:
        return "No Please, I'm begging you!";
      case 2:
        return "PLEASEEEE!!";
      default:
    }
  };

  const images = [img2, img3, img1];

  return (
    <Layout>
      {imageIndex >= 0 && !buttonYes && (
        <section className="d-flex justify-content-center">
          <h1
            style={{
              color: pink,
              border: "2px solid black",
              borderRadius: "15px",
              padding: "20px",
              display: "inline-block",
              position: "relative",
              backgroundColor: "white",
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {getMessage()}
            <span
              style={{
                content: "",
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                marginLeft: "-15px",
                width: "0",
                height: "0",
                borderStyle: "solid",
                borderWidth: "20px 15px 0 15px",
                borderColor: "black transparent transparent transparent",
              }}
            ></span>
          </h1>
        </section>
      )}

      <main>
        <div className="d-flex justify-content-center">
          {buttonYes ? (
            <img
              src={img4}
              alt="Image 4"
              style={{
                width: "300px",
                marginBottom: "20px",
                borderRadius: "15px",
              }}
            />
          ) : (
            imageIndex >= 0 && (
              <img
                src={images[imageIndex]}
                alt={`Image ${imageIndex + 1}`}
                style={{
                  width: "300px",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
            )
          )}
        </div>
        <h1 className="text-center" style={{ color: pink }}>
          {buttonYes
            ? "YEAYYY!!! ĐỪNG ĐI ĐÂU NHÉ!"
            : "Bạn muốn đi chơi với Fat không?"}
        </h1>
        <section className="d-flex justify-content-center pt-5">
          <div className="d-flex justify-content-between gap-5">
            {buttonYes ? (
              <HeartButton
                style={{
                  borderRadius: "1rem",
                  scale: `${scale}`,
                  transition: "transform 0.5s ease-in-out",
                  width: "100%",
                }}
                text="
           ▂▃▄▅▆▇█▓▒░˗ˋˏ ♡ ˎˊ˗CLICK ME˗ˋˏ ♡ ˎˊ˗░▒▓█▇▆▅▄▃▂
                "
                onClick={() => navigate("/date")}
              />
            ) : (
              <>
                <HeartButton
                  style={{
                    borderRadius: "1rem",
                    scale: `${scale}`,
                    zIndex: 1,
                    transition: "transform 0.5s ease-in-out",
                  }}
                  text="Có"
                  onClick={handleYesClick}
                />
                <HeartButtonNo
                  style={{
                    display: `${imageIndex === 2 ? "none" : ""}`,
                    borderRadius: "1rem",
                    transition: "transform 0.5s ease-in-out",
                  }}
                  text="Không"
                  onClick={handleNoClick}
                />
              </>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
