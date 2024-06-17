import React from "react";

export class Child extends React.Component {
  state={
    new:0,
  }
  componentWillUnmount() {
    if(this.props.state===109){
      console.log("Clear");
      this.setState({new:0})
    }
    
    this.setState({new:this.state.new + 1})
    console.log("Unmount when element is clear");
  }
  render() {
    return <h4>{this.state.new} Show Number of click : {this.props.state}</h4>;
  }
}
