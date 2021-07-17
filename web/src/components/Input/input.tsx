import React, {useState} from "react";
import styles from "./input.module.scss";

const Input = ({type, inputClass, placeholder}) => {
  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    // <form className={styles.form} onSubmit={onInputSubmit}>
    <input
      className={styles[inputClass]}
      type={type}
      placeholder={placeholder}
      onChange={onInputChange}
      value={value}
    />
  );
};

export default Input;
