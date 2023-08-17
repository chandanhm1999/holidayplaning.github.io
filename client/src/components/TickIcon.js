import React from "react";

const TickIcon = () => {
  return (
    <div>
      <svg 
        className="tick"
        xmlns="http://www.w3.org/2000/svg" 
        width="25" 
        height="25"
        viewBox="0 0 512 512">
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
        <polyline points="352 176 217.6 336 160 272"/>
      </svg>
    </div>
  );
};

export default TickIcon;