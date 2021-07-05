import React from 'react';

import './CourseGoalItem.css';
// props { key: goal.id, id: goal.id, onDelete: props.onDeleteItem }
const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  // call deleteItemHandler in App.js to filter all goals that are not with id of deleted
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    // set delete functionality on click event
    <li className="goal-item" onClick={deleteHandler}>
      {/* show goal text */}
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
