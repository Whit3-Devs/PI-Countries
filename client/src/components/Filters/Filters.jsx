import React, { useEffect, useState } from "react";
import style from "./Filters.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchCountries, sortPopulation, sortAlphabet, filterContinent, filterActivities, getActivitiesFromAPI, setCountriesPagination } from "../../store/actions";
import { ASCENDANT, DESCENDANT, A_Z, Z_A } from "../../constants/sort";


const Filters = () => {

  let { activities } = useSelector((state) => state.activities)
  let [ inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivitiesFromAPI())
  }, [])

  let filter = activities.map((activity) => {
    return activity.name
  })

  let arrayActivitiesNameFiltered = filter.filter((name,index)=>{
    return filter.indexOf(name) === index;
  })

  function onChangeInputSearch(e) {
    e.preventDefault();
    setInputSearch(e.target.value);
  }

  function onSearchSubmit(e) {
    e.preventDefault();
    dispatch(searchCountries(inputSearch))

  }

  function onSelectSortChange(e) {
    e.preventDefault();
    if (e.target.name === 'population') {
      dispatch(sortPopulation(e.target.value))
    }
    if (e.target.name === 'alphabet') {
      dispatch(sortAlphabet(e.target.value))
    }

  }

  function onSelectFilterChange(e) {
    e.preventDefault();
    if(e.target.name === 'continent') {
      dispatch(filterContinent(e.target.value));
    }
    if(e.target.name === 'activities') {
      dispatch(filterActivities(e.target.value));
    }
  }

  return (
    <div className={style.filterContainer}>
      <div className={style.containerForms}>
        <form className={style.formSearch} onSubmit={onSearchSubmit}>
          <input type="text" name="search" id="" placeholder="Search here..." className={style.inputSearch} onChange={onChangeInputSearch} />
          <input type="submit" value="SEARCH" className={style.buttonSearch}/>
        </form>

        <div className={style.containerOrderSelect}>
          <label>Sort</label>
          <select name="alphabet" onChange={onSelectSortChange}>
            <option>Alphabet</option>
            <option value={A_Z}>A-Z</option>
            <option value={Z_A}>Z-A</option>
          </select>
          <select name="population" onChange={onSelectSortChange}>
            <option>Population</option>
            <option value={ASCENDANT}>Acendant</option>
            <option value={DESCENDANT}>Descendant</option>
          </select>
        </div>

        <div className={style.containerFilterSelect}>
          <label>Filter</label>
          <select name="continent" onChange={onSelectFilterChange}>
            <option >Continents</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">Nort America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select name="activities" onChange={onSelectFilterChange}>
            <option>Activities</option>
            { arrayActivitiesNameFiltered
            ? (
              arrayActivitiesNameFiltered.map((nameActivity, index) => {
                return (
                  <option key={index} value={nameActivity}>{nameActivity}</option>
                )
              })
            ) : (
              <option>No activities</option>
            )
            }
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
