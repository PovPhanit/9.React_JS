import React from "react";
import { Child } from "./Child";
export default class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      count: 1,
      show: false,
    };
  }
  componentDidMount() {
    console.log("Second Execute then Render");
    this.setState({ count: JSON.parse(localStorage.getItem("counter")) });
  }
  componentDidUpdate(prevProps, prevState, snapSlot) {
    console.log("When State is updated");
    console.log("Prevprops : ", prevProps);
    console.log("Prevstate : ", prevState.count);
    console.log("Snapslot  : ", snapSlot);
    localStorage.setItem("counter", JSON.stringify(this.state.count));
  }
  
  render() {
    console.log("First Execute");
    console.log(this.state.count);
    return (
      <div className="container">
        <div>Clicked : {this.state.count}</div>
        {this.state.show ? <Child state={this.state.count} setState={this.setState} /> : null}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            this.setState({ show: !this.state.show });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}


