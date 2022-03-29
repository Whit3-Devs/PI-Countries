import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesFromAPI } from "../../store/actions";
import CountriesMap from "../../components/CountriesMap/CountriesMap";
// import Country from "../../components/Country/Country.jsx";
import styles from "./Countrys.module.css";
import imageWorldMap from "../../assets/images/worldmap.png";
import world from "../../assets/images/world.png";
import Pagination from "../../components/Pagination/Pagination";
import reOrderArrayPagination from "../../helpers/functions/reOrderArrayPagination";



const Countrys = () => {

  let {filteredCountries} = useSelector((state) => state.countries);
  let {loading} = useSelector((state) => state.loading)
  let dispatch = useDispatch();
  const [pag, setPages] = useState(0);

  let countryPagination = useRef()
  countryPagination.current = reOrderArrayPagination(filteredCountries);
  function onChangePagination(e) {
    setPages(parseInt(e.target.value));
  }

  useEffect(() => {
    dispatch(getCountriesFromAPI());
  }, []);

  return (
    <>
      <img
        src={imageWorldMap}
        alt="Imagen del mapa del mundo"
        className={styles.imageBackgroundWorld}
      />
      <Pagination countries={countryPagination.current} onChangePagination={onChangePagination}/>
      <section className={styles.containerCountries}>

        {loading
        ? (
          <div className={styles.containerLoading}>
            <h2>Loading ...</h2>
            <img src={world} alt="Imagen tipo dibujo del mundo" className={styles.loadingWorld} />
          </div>
        ) : (
          <CountriesMap countries={countryPagination.current} numPag={pag}/>
        )
        }
      </section>
      <Pagination countries={countryPagination.current} onChangePagination={onChangePagination}/>
    </>
  );
};

export default Countrys;
