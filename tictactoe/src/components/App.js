import Board from "./board";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  isHandleClick =(i)=>{
      let squares =  [...this.state.history.squares];
      squares[i] =  this.state.xIsNext  ? "X" : "O";
      this.setState({
           history   : [
               {
                squares : squares ,
               }
           ],
          xIsNext : !this.state.xIsNext,
      })
  }

  render() {
    return <div>App</div>;
  }
}



function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  