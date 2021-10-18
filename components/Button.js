import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ title, onClick, style = [], textStyle = [] }) => {
  return (
    <div className={styles.container} onClick={onClick} style={style}>
      <span className={styles.text} style={textStyle}>
        {title}
      </span>
    </div>
  );
};

export default Button;
