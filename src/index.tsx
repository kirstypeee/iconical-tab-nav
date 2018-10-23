/**
 * @class ExampleComponent
 */

import * as React from 'react'
import styles from './styles.css'

interface Tab {
  label?: string
  icon?: string
}

interface ContainerStyles {
  backgroundColour?: string
  padding?: string
}

interface LabelStyles {
  margin?: string
  fontSize?: string
}

interface TabStyles {
  padding?: string
}

export type Props = {
  tabs: Tab[]
  showLabels?: boolean
  hideIcons?: boolean
  containerStyles: ContainerStyles
  labelStyles: LabelStyles
  tabStyles: TabStyles
  hoverColour?: string
  selected?: number
  iconSize?: string
  selectedColour?: string
  defaultColor?: string
}

export type State = {
  selected: any
}

const iconSizeClass = {
  s: 'md18',
  m: 'md24',
  l: 'md36',
  xl: 'md48'
}

export default class ExampleComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: props.selected ? props.selected : 'none'
    }
  }

  render() {
    const {
      tabs,
      showLabels,
      hideIcons,
      containerStyles,
      labelStyles,
      tabStyles,
      hoverColour,
      iconSize,
      selectedColour,
      defaultColor,
    } = this.props

    return (
      <div className={styles.itnContainer} style={containerStyles}>
        {tabs.map((tab: Tab, i: number) => {
          const selected = this.state.selected === i;
          const color = selected ? selectedColour : defaultColor;
          return (
            <div className={styles.itnTab + ` ${selected ? styles.selectedTab : ''}`}
              onClick={() => { this.setState({ selected: i }) }}
              onMouseOver={(event) => event.currentTarget.style.backgroundColor = hoverColour || null}
              onMouseOut={(event) => event.currentTarget.style.backgroundColor = 'transparent'}
              style={tabStyles}>
              {!hideIcons &&
                <span className={styles.itnTabLabel} style={{...labelStyles, color: color}}>
                  <i className={`material-icons ${iconSize && styles[iconSizeClass[iconSize]]}`}>
                    {tab.icon}
                  </i>
                </span>
              }
              {showLabels &&
                <span className={styles.itnTabLabel} style={{...labelStyles, color: color}}>
                  {tab.label}
                </span>}
            </div>
          )
        })}
      </div>
    )
  }
}
