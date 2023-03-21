import { FC } from "react";

import "./Card.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card: FC<CardProps> = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
