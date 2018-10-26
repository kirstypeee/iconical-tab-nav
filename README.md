# iconical-tab-nav

> A Tab Navigation component that can be either text or icon based

[![NPM](https://img.shields.io/npm/v/iconical-tab-nav.svg)](https://www.npmjs.com/package/iconical-tab-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

Check out the [demo](https://kirstypeee.github.io/iconical-tab-nav/).

## Install

```bash
npm install --save iconical-tab-nav
```

## Usage

This library has been designed to work with material icons by default. 
In order to use material icons you must include the following line in your application.

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

You can then use any of the icons available at <https://material.io/tools/icons/> by passing in the relevant string to the 'icon' prop.

```tsx
import * as React from 'react'

import IconicalTabNav from 'iconical-tab-nav'

class Example extends React.Component {
  render () {
    return (
      <IconicalTabNav 
      tabs={
        [
          { label: 'Home', icon: 'home', render:  ()=> <div>Tab One</div>}, 
          { label: 'Favourites', icon: 'favorite', render:  ()=> <div>Tab Two</div>}
        ]
      }/>
    )
  }
}
```

## API

**Tab**

IconicalTabNav has one required prop, _tabs_, that takes a Tab\[].

The interface for Tab is as follows:

    interface Tab {
      label?: string
      icon?: string
    }

In order for the icon to render, the string passed in must match an icon in the material icons set.
<https://material.io/tools/icons/>

**Props**

| name            |            type           |                                                             default |                                                                                                                                                        description |
| --------------- | :-----------------------: | ------------------------------------------------------------------: | -----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| tabs (required) |           Tab\[]          |                                                                     |                                                                                                                                                        (see above) |
| showLabels      |          boolean          |                                                               false |                                                                                                                                                   show text labels |
| hideIcons       |          boolean          |                                                               false |                                                                                                                                                   show icon labels |
| containerStyles |      ContainerStyles      |                                                        (see styles) |                                                                                                                                                       (see styles) |
| tabStyles       |         TabStyles         |                                                        (see styles) |                                                                                                                                                       (see styles) |
| selectedStyles  |         TabStyles         |                                                        (see styles) |                                                                                                                                                       (see styles) |
| labelStyles     |        LabelStyles        |                                                        (see styles) |                                                                                                                                                       (see styles) |
| hoverColour     |           string          | ![\#dfe3e6](https://placehold.it/15/dfe3e6/000000?text=+) `#dfe3e6` |                                                                                                                   The background color of the tab when moused over |
| selected        |      number / 'none'      |                                                              'none' |                                                                                                                    The index of the default tab selection (e.g. 0) |
| iconSize        | enum('s', 'm', 'l', 'xl') |                                                                 'm' |                                                                           Size of the icon, as per material design standards (s: 18px, m: 24px, l: 32px, xl: 48px) |
| selectedColour  |           string          | ![\#008673](https://placehold.it/15/008673/000000?text=+) `#008673` |                                                                                                                         The color of the text and icon when active |
| defaultColor    |           string          | ![\#8897a2](https://placehold.it/15/8897a2/000000?text=+) `#8897a2` |                                                                                                                   The color of the text and the icon when inactive |
| reverse         |          boolean          |                                                               false | Indicates whether the tabs should sit at the top or the bottom of the container. Default is at the top, if reverse is set to true then tabs will sit at the bottom |

**Styles**

IconicalTabNav has default styling applied so there should be no need to apply futher styles unless desired.
It takes style objects for the container component, tabs and the labels and is therefore the styling is highly customisable.

For containerStyles these are the expected values: 

    interface ContainerStyles {
      backgroundColour?: string (default white)
      padding?: string
    }

These styles are applied to the container that wraps the tabs.

For tabStyles and selectedStyles these are the expected values: 

    interface TabStyles {
      padding?: string
    }

These styles are applied to the tab divs. tabStyles are applied to all tabs, selectedStyles are applied to the currently selected tab.

For labelStyles these are the expected values: 

    interface LabelStyles {
      margin?: string
      fontSize?: string
    }

These styles are applied to the label, both text and icon.

But you can pass any valid styles through these objects as they are passed directly in to the component.

## License

MIT © [kipurc](https://github.com/kipurc)
