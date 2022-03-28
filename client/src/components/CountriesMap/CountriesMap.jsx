import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const CountriesMap = ({countries, numPag}) => {

  return (
    <>
        { countries.length &&
            countries[numPag].map((country, index) => {
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