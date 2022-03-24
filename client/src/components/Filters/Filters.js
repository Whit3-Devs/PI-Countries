import React from "react";
import style from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={style.filterContainer}>
      <div className={style.containerForms}>
        <form action="" className={style.formSearch}>
          <input type="text" name="search" id="" placeholder="Buscar aqui..." className={style.inputSearch} />
          <input type="button" value="BUSCAR" className={style.buttonSearch}/>
        </form>

        <div className={style.containerOrderSelect}>
          <label>Ordenar</label>
          <select name="A-Z" id="">
            <option value="Alfabetico">Alfabético</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <select name="Population" id="">
            <option value="Poblacion">Población</option>
            <option value="mayoramenor">Mayor a Menor</option>
            <option value="menoramayor">Menor a Mayor</option>
          </select>
        </div>

        <div className={style.containerFilterSelect}>
          <label>Filtrar</label>
          <select name="Continents" id="">
            <option value="continentes">Continentes</option>
            <option value="Sudamerica">Sudamerica</option>
            <option value="Asia">Asia</option>
            <option value="Europa">Europa</option>
            <option value="Norteamerica">Norteamérica</option>
            <option value="Antartida">Antártida</option>
            <option value="Africa">África</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select name="Activities" id="">
          <option value="rafting">Rafting</option>
            <option value="snorquel">Snorquel</option>
            <option value="climbing">Climbing</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
