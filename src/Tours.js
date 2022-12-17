import React from "react";
import { useNavigate } from "react-router-dom";
import Tour from "./Tour";
const Tours = ({ place, removeTour }) => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="titles">
        <h2>Ours Tours</h2>
        <button className=" n" onClick={() => navigate("/Add")}>
          Add
        </button>
      </div>
      <div className="underline"></div>
      <div>
        {place.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
