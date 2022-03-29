import React, { useEffect, useRef } from 'react';
import style from './Pagination.module.css'

const Pagination = ({countries, onChangePagination}) => {
  const botonPaginado = useRef()
  let buttonAnt = useRef()

  useEffect(() => {
  }, [])


  function onClickClass(e) {
    if(e.target.value >= 0){
      if(typeof buttonAnt.current !== 'undefined') {
        botonPaginado.current.childNodes[buttonAnt.current].className = style.buttonPag;
      }
      botonPaginado.current.childNodes[e.target.value].className = style.active;
      buttonAnt.current = e.target.value;
    }
  }
  
  return (
    <div className={style.containerButtonsPagination}>
      <div className={style.containerButtons} ref={botonPaginado} onClick={onClickClass}>
      { countries.length > 0 ?
      (
        countries.map((countriesArrays, index)=> {
          return (
            <button className={style.buttonPag} key={index} value={index} onClick={(e) => {onChangePagination(e)}}>{index+=1}</button>
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