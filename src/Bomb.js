import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props){
    super()
    this.state={secondsLeft: props.initialState}
  }
  render(){
    return(
      <div className="Bomb">
        I
      </div>
    )
  }
}