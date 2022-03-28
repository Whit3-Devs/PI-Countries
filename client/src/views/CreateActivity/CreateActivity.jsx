import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import style from './CreateActivity.module.css';
import { useHistory } from 'react-router-dom';


const CreateActivity = () => {
  const history = useHistory()
  let {countries} = useSelector(state => state.countries);
  const [ newActivity, setNewActivity] = useState({ difficulty: 5});

  function onRangeChange(e){ 
    e.preventDefault();
    setNewActivity({
      ...newActivity,
      difficulty: parseInt(e.target.value)
    })
  }

  function onChangeInputValue(e) {
    e.preventDefault()
    setNewActivity({
      ...newActivity,
      [e.target.name]: e.target.value,
    })
  }

  function onSubmitNewActivity(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/api/activities', newActivity)
    .then(() => {
        history.push(`/countries/countrydetail/${newActivity.countryID}`)
    })
  }



  console.log(newActivity)
  return (
    <div className={style.containerCreateActivity}>
      <form className={style.containerForm} onSubmit={onSubmitNewActivity}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder='name' name='name' className={style.formValueInput} onChange={onChangeInputValue} />
        </div>
        <div>
          <label>Difficulty:</label>
          <span className={style.containerRange}>
            <input type="range" min="1" max="5" placeholder='difficulty' name='difficulty' className={style.formValueInput} onChange={onRangeChange} />
            <span>
              {newActivity.difficulty}
            </span>
          </span>
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" placeholder='duration' name='duration' className={style.formValueInput} onChange={onChangeInputValue} />
        </div>
        <div>
          <label>Season:</label>
          <select name='season' className={style.formValueInput} onChange={onChangeInputValue}>
            <option>Season</option>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            <option value="Spring">Spring</option>
            <option value="Autumn">Autumn</option>
          </select>
        </div>
        <div>
          <label>Countries:</label>
          <select name="countryID" className={style.formValueInput} onChange={onChangeInputValue}>
            {
              countries.map((country, index) => {
                return (
                  <option key={index} value={country.id}>{country.name}</option>
                )
              })
            }
          </select>
        </div>
        <input type="submit" value="CREATE ACTIVITY" className={style.buttonCreateActivity}/>
      </form>
    </div>
  )
}

export default CreateActivity