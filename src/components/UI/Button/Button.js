// import styled from 'styled-components';
import React from 'react';

import styles from './Button.module.css';

// attacked template literal, return new button component
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// sended props = {type:"submit"}
const Button = props => {
  return (
    // use additional props that we receive using button component - children
    // props.children is anything, that we pass in between the opening and closing component tags for Button i.e <Button></Button>
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
