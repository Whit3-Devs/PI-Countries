import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Country from '../Country/Country';

const CountriesMap = ({countries, onResetPagination, numPag}) => {
    const {loading} = useSelector((state) => state.loading)
    
    useEffect(() => {
        

        return () => onResetPagination(0);
    }, [countries])
    
  return (
    <>
        { 
            countries[numPag]?.map((country, index) => {
                return (
                    <Country
                    key={index}
                    cca3={country.id}
                    name={country.name}
                    image={country.image}
                    continent={country.continent}
                    />
                );
            })
        }
    </>
    )
}

export default CountriesMap