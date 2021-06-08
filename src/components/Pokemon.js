import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/pokemon.scss";

function Pokemon(props) {
  const poketypes = () => {
    return props.pokeItem.types.map((poketype, index) => {
      return (
        <li className="pokeCard-typesList-type" key={index}>
          {poketype}
        </li>
      );
    });
  };

  return (
    <article className="pokeCard">
      <img
        className="pokeCard-image"
        src={props.pokeItem.url}
        alt={props.pokeItem.name}
      />
      <h2 className="pokeCard-name">{props.pokeItem.name}</h2>
      <ul className="pokeCard-typesList">{poketypes()}</ul>
    </article>
  );
}

Pokemon.propTypes = {
  pokeItem: PropTypes.exact({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
    evolution: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};

export default Pokemon;
