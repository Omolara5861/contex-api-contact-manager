import React, { Component } from 'react'

export default class Test extends Component {
    //Life Cycle Methods

    //Method runs after the component output has been rendered to the DOM.
    componentDidMount() {
        console.log('Component Did Mount');
    }
    //Method runs before the component output has been rendered to the DOM.
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    componentDidCatch() {
        console.log('Component Did Catch');
    }
  render() {
    return (
      <div><h1>Test Component</h1></div>
    )
  }
}
