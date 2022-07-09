import React from 'react';
import './Button.css';

export default function Button(props) {
  const { className = "", type = "button" } = props
  return (
    <button className={`button ${className}`} type={type}>
      {props.children}
    </button >
  )
}