import React from "react";

const Details = ({ peopleDetails }) => {
  return (
    <>
      {!peopleDetails > 0 ? (
        <p>Select a character to show some details</p>
      ) : (
        <div style={{ border: "1px solid black" }}>
          <ul>
            <li>Name: {peopleDetails.name}</li>
            <li>Height: {peopleDetails.height}</li>
            <li>Birth Year: {peopleDetails.birth_year}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Details;
