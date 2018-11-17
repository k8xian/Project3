import React from "react";

import styles from "./style";
import spinner from "./puff.svg";

const spinner = props => {
  <div className={styles.spinner}>
    <img src={spinner} />
  </div>;
};

export default spinner;
