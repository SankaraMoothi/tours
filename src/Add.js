import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add({ place, setplace }) {
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [name, setname] = useState("");
  const [Info, setInfo] = useState("");
  const navigate = useNavigate();
  function handleChange(event) {
    setname(event.target.value);
  }
  function handleChangeInfo(event) {
    setInfo(event.target.value);
  }
  function handleChangeImage(event) {
    setimage(event.target.value);
  }
  function handleChangePrice(event) {
    setprice(event.target.value);
  }
  return (
    <div className="container">
      <form>
        <h3>Add New Tours</h3>
        <input
          className="input"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter the Name"
        />
        <input
          className="input"
          type="text"
          onChange={handleChangePrice}
          placeholder="Enter the Price"
        />
        <input
          className="input"
          type="text"
          onChange={handleChangeInfo}
          placeholder="Enter the Info"
        />
        <input
          className="input"
          type="text"
          onChange={handleChangeImage}
          placeholder="Enter the Image"
        />
        <button
          type="submit"
          onClick={function ad(e) {
            e.preventDefault();
            let newplace = {
              id: +`${place.length + 1}`,
              name: name,
              info: Info,
              price: price,
              image: image,
            };

            setplace([...place, newplace]);

            navigate("/");
          }}
        >
          Add Member
        </button>
      </form>
    </div>
  );
}

export default Add;
