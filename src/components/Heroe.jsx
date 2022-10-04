import React from "react";

const Heroe = (props) => {
  console.log(props.heroData);
  //const data = ["superman", "batman", "ciclope"];
  return (
    <>
      {props.heroData.map((heroe) => {
        return (
            <div 
            key={`${heroe.name}`} 
            className="hero">
            <img
              src={heroe.image}
              alt={heroe.name}
            />
            <div className="hero-info">
              <h3>{heroe.name}</h3>
            </div>
            <div className="overview">
              <h3>{heroe.superhero}</h3>
              <strong> {heroe.first_appearance} </strong>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Heroe;
