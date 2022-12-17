import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setreadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p onClick={() => setreadmore(!readmore)}>
          {readmore ? info : `${info.substring(0, 180)}...`}
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
