import React, { Component } from "react";


class Btn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null
      };
    }
  
    render() {
      return (
        <div>
           
          <h3>Просто окно</h3>
          <button className="btn" onClick={() => alert("Как вам такое")}>
            alert
          </button>
        </div>
      );
    }
  }
  
  export default Btn;
