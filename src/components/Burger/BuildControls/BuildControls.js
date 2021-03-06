import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Burger price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        addIngredient={() => {
          props.addIngredient(ctrl.type);
        }}
        removeIngredient={() => {
          props.removeIngredient(ctrl.type);
        }}
        disabled={props.disabled[ctrl.type]}
        label={ctrl.label}
      />
    ))}
    <button
      className={classes.OrderButton}
      onClick={props.purchasing}
      disabled={!props.purchasable}
    >
      {props.isAuth ? "ORDER NOW" : "SIGN IN TO PURCHASE"}
    </button>
  </div>
);

export default buildControls;
