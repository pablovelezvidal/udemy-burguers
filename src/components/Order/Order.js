import React from "react";

import classes from "./Order.module.css";

const Order = (props) => {
  return (
    <div className={classes.Order}>
      {props.order.ingredients &&
        Object.keys(props.order.ingredients).map((key, i) => {
          return (
            <span style={{ margin: "0 7px" }} key={key + i}>
              {key}: ({props.order.ingredients[key]})
            </span>
          );
        })}
      <p>
        Price:{" "}
        <strong>{Number.parseFloat(props.order.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
