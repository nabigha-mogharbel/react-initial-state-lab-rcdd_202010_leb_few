import React, { Component } from 'react'

export default class ImageSlider extends Component {
  constructor(props){
    super()
    this.state={currentSlideIndex: 0}
  }
  render(){
    return(
      <div className="slider">
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}