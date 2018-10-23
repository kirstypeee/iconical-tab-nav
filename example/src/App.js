import React, { Component } from 'react'

import IconicalTabNav from 'iconical-tab-nav'

export default class App extends Component {
  render() {
    return (
      <div>
        <IconicalTabNav tabs={[{ label: 'Home', icon: 'home' }, { label: 'Favourites', icon: 'favorite' }]} showLabels/>
      </div>
    )
  }
}
