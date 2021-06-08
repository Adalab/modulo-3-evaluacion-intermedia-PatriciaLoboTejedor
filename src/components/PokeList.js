import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokelist.scss";
import PropTypes from "prop-types";

function PokeList(props) {
  const pokeList = props.pokedata.map((pokeItem) => (
    <li key={pokeItem.id}>
      <Pokemon pokeItem={pokeItem} />
    </li>
  ));
  return <ul>{pokeList}</ul>;
}

PokeList.propTypes = {
  pokedata: PropTypes.array.isRequired,
};

export default PokeList;
