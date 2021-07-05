import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  // set initial list of goals
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  // add new goal to list using previous state
  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      // add current goals to new array
      const updatedGoals = [...prevGoals];
      // add entered goal with random id to new array. Use unshift to add this goal first
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      // update courseGoals = updatedGoals
      return updatedGoals;
    });
  };

  // delete clicked goal
  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      // filter all goals that don't have id of deleted goals
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  // when there is no goal show text to a user
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );
  
  // when there is at least 1 goal - render goal list component
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  // return input form with content depending on conditions
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
