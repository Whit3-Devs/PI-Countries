import React, { useEffect, useState } from "react";
import Country from "../../components/Country/Country";
import axios from "axios";
import styles from "./Countrys.module.css";
import imageWorldMap from "../../assets/images/worldmap.png";

const Countrys = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then((response) => {
      let { data } = response;

      setCountries(
        data.map((country, key) => {
          return {
            cca3: country.cca3,
            name: country.name.official,
            image: country.flags[1],
            continent: country.continents[0],
            index: key,
          };
        })
      );
    });

    console.log(countries);
  }, []);

  return (
    <>
      <img
        src={imageWorldMap}
        alt="Imagen del mapa del mundo"
        className={styles.imageBackgroundWorld}
      />
      <section className={styles.containerCountries}>
        {countries.map((country) => {
          return (
            <Country
              key={country.index}
              cca3={country.cca3}
              name={country.name}
              image={country.image}
              continent={country.continent}
            />
          );
        })}
      </section>
    </>
  );
};

export default Countrys;
