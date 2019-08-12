import React from 'react';
import Info from "./Info";

function InfoWrapper(props) {
  return (
    <div>
      <Info />
    </div>
  )
}

export default InfoWrapper;

//you use {props.children} inside the <div></div> if you don't initially know the contents
//Component Composition