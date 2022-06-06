import React from "react";
import { data } from "../data/data";

const PeopleList = ({ people, handleShowDetails }) => {
  return (
    <div>
      <ul>
        {people?.map((character) => (
          <li
            key={character.name}
            onClick={() => handleShowDetails(character.url)}
          >
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
