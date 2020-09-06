// MyComponent.js
import React from "react";
import { observer } from "mobx-react";
import store from "./store.js";
import Card from "./Card";

const Counter = () => (
  <>
    <div className="counterContainer">
      <Card heading={"Counter.js"} value={store.counter} />
      <button
        style={{ marginRight: 30, fontSize: "larger" }}
        onClick={() => store.increment()}
      >
        +
      </button>

      <button style={{ fontSize: "larger" }} onClick={() => store.decrement()}>
        -
      </button>
    </div>
  </>
);

export default observer(Counter);
