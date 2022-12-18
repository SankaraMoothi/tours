import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function Home({ place, setplace, removeTour }) {
  const [loading, setloading] = useState(true);
  const fetchTourss = () => {
    window.location.reload();
  };
  const fetchTours = () => {
    setloading(false);
  };
  useEffect(() => {
    setTimeout(fetchTours, 1000);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (place.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTourss}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours place={place} removeTour={removeTour} />
    </main>
  );
}

export default Home;
