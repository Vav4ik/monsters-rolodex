import { FC } from "react";
import { Monster } from "../../App";
import Card from "./Card";

import "./CardList.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList: FC<CardListProps> = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
