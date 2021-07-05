import React from 'react';

import './Button.css';
// sended props = {type:"submit"}
const Button = props => {
  console.log(props);
  return (
    // use additional props that we receive using button component - children
    // props.children is anything, that we pass in between the opening and closing component tags for Button i.e <Button></Button>
    <button type={props.type} className="button">
      {props.children}
    </button>
  );
};

export default Button;
