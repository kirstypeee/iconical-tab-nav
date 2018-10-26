import React, { Component } from 'react';
import Basic from './demo/basic';
import Labels from './demo/labels';
import Reverse from './demo/reverse';
import CustomStyles from './demo/customStyles';
import ExtremeCustomStyles from './demo/extremeStyles';
import logo from './images/logo.png';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="itn-header">
          <h1>Iconical Tab Nav</h1>
          <img src={logo} alt="" className="logo" />
          <span className="author">@kirstypeee</span>
        </div>
        <div className="itn-wrapper">
          <div className="itn-container">
            <h2>Example One: Basic</h2>
            <Basic />
          </div>
          <div className="itn-container">
            <h2>Example Two: Labels</h2>
            <Labels />
          </div>
          <div className="itn-container">
            <h2>Example Three: Reverse</h2>
            <Reverse />
          </div>
          <div className="itn-container">
            <h2>Example Four: Custom Styling</h2>
            <CustomStyles />
          </div>
          <div className="itn-container">
            <h2>Example Five: Extreme Custom Styling</h2>
            <ExtremeCustomStyles />
          </div>
        </div>
      </div>
    )
  }
}
