import React, { Component } from 'react'
import AppStore from './App.store'
import { observe } from 'mobx';

@observe
export default class App extends Component {
  constructor(props) {
    super(props)
    this.store = new AppStore();
  }
  render() {
    const { num } = this.store;
    return (
      <div>
        <p>{num}</p>
      </div>
    )
  }
}
