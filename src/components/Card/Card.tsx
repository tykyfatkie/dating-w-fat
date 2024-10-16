import React from "react";
import "./Card.css"; // Import your CSS file
import { pink } from "../interfaces/HeartButton.interface";

interface CardProps {
  title?: string;
  image?: string;
  isSelected?: boolean; // Add prop to indicate if the card is selected
  onClick?: () => void; // Add prop to handle click events
  noTitle?: boolean; // Add prop to conditionally render the title
}

const CardComponent: React.FC<CardProps> = ({
  title,
  image,
  isSelected = false,
  onClick,
}) => {
  return (
    <React.Fragment>
      <main className="d-flex flex-column">
        <div
          className={
            isSelected
              ? "card selected-card m-3 rounded-circle"
              : "card m-3 rounded-pill border-0 bg-transparent"
          }
          style={{
            cursor: "pointer",
          }}
        >
          <img
            className="rounded-circle"
            src={image}
            width={210}
            height={210}
            onClick={onClick}
          />
        </div>
        <h5 className="text-center" style={{ color: pink }}>
          {title}
        </h5>
      </main>
    </React.Fragment>
  );
};

export default CardComponent;
