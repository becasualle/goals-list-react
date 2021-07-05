import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

// props {onAddGoal:addGoalHandler} - function, that updates goals array
const CourseInput = props => {
  // set initial input value empty
  const [enteredValue, setEnteredValue] = useState('');
  // when user enters something update entered value
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };
  // when user submit form not reload page and update array with entered value 
  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
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
