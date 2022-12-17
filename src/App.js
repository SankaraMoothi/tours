import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Add";
import data from "./data";
import Home from "./Home";

function App() {
  const [place, setplace] = useState(data);
  const removeTour = (id) => {
    const newplace = place.filter((tour) => tour.id !== id);
    setplace(newplace);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home place={place} setplace={setplace} removeTour={removeTour} />
          }
        />
        <Route
          path="/Add"
          element={<Add place={place} setplace={setplace} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
