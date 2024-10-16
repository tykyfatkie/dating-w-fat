import { HeartButtonProps } from "../interfaces/HeartButton.interface";
import "../HeartButton/HeartButton.css";

import React, { forwardRef } from "react";

const HeartButtonNo: React.FC<HeartButtonProps> = forwardRef<
  HTMLButtonElement,
  HeartButtonProps
>(({ text, onClick, style }, ref) => {
  return (
    <button className="heart-button" style={style} onClick={onClick} ref={ref}>
      <span className="box">{text}</span>

      <div className="star-1">
        <svg
          height="25"
          width="25"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="#fd1853" />
          <circle cx="20" cy="24" r="5" fill="#fff" />
          <circle cx="44" cy="24" r="5" fill="#fff" />
          <path
            d="M20,40 C30,30 34,30 44,40"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="star-3">
        <svg
          height="9"
          width="9"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="#fd1853" />
          <circle cx="20" cy="24" r="5" fill="#fff" />
          <circle cx="44" cy="24" r="5" fill="#fff" />
          <path
            d="M20,40 C30,30 34,30 44,40"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="star-4">
        <svg
          height="10"
          width="10"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z"
            fill="#fd1853"
          ></path>
        </svg>
      </div>
      <div className="star-5">
        <svg
          height="20"
          width="20"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="#fd1853" />
          <circle cx="20" cy="24" r="5" fill="#fff" />
          <circle cx="44" cy="24" r="5" fill="#fff" />
          <path
            d="M20,40 C30,30 34,30 44,40"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="star-6">
        <svg
          height="7"
          width="7"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="#fd1853" />
          <circle cx="20" cy="24" r="5" fill="#fff" />
          <circle cx="44" cy="24" r="5" fill="#fff" />
          <path
            d="M20,40 C30,30 34,30 44,40"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </button>
  );
});

export default HeartButtonNo;
