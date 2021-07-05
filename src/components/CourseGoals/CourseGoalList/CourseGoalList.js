import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

// props = {items:courseGoals, onDeleteItem:deleteItemHandler}
// cousegoals - array of objects {text:"", id:""}, deleteItem - function that filters only if id not clicked
const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {/* for each goal create goal list item */}
      {/* we will call .onDelete prop on every click list item in CourseGoalItem.js */}
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
