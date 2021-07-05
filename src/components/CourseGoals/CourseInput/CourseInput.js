import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;
  

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.inValid ? 'red' : 'black'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.inValid ? 'red' : '#ccc'};
//     background: ${props => props.inValid ? 'rgb(255, 181, 173)' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

// props {onAddGoal:addGoalHandler} - function, that updates goals array
const CourseInput = props => {
  // set initial input value empty
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  // when user enters something update entered value
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  // when user submit form not reload page and update array with entered value 
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div 
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/*  type "submit" will cause this button to be an HTML submit button. */}
      {/* When this button is clicked,  formSubmitHandler will invoke.*/}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
