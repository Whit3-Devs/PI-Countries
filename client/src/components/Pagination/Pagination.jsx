import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({countries, onChangePagination}) => {
  
  return (
    <div className={style.containerButtonsPagination}>
      <div className={style.containerButtons}>

      { countries.length > 0 ?
      (
        countries.map((countriesArrays, index)=> {
          return (
            <button key={index} value={index} onClick={onChangePagination}>{index+=1}</button>
          )
        })
        ) : (
          <></>
          )
        }
      </div>
    </div>
  )
}

export default Pagination