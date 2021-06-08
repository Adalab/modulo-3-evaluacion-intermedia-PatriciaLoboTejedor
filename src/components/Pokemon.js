import React from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  const poketypes = () => {
    return props.pokeItem.types.map((poketype, index) => {
      return <li key={index}>{poketype}</li>;
    });
  };

  return (
    <article className="pokeCard">
      <img
        className="pokeImage"
        src={props.pokeItem.url}
        alt={props.pokeItem.name}
      />
      <h2 className="pokeName">{props.pokeItem.name}</h2>
      <ul className="pokeTypes">{poketypes()}</ul>
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
