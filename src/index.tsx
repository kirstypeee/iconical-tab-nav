/**
 * @class IconicalTabNav
 */

import posed, { PoseGroup } from 'react-pose';
import * as React from 'react'
import styles from './styles.css'

interface Tab {
  label?: string
  icon?: string
  render: () => any;
}

interface ContainerStyles {
  backgroundColor?: string
  padding?: string
}

interface LabelStyles {
  margin?: string
  fontSize?: string
}

interface TabStyles {
  backgroundColor?: string
  padding?: string
}

export type Props = {
  tabs: Tab[]
  showLabels?: boolean
  hideIcons?: boolean
  containerStyles: ContainerStyles
  labelStyles: LabelStyles
  tabStyles: TabStyles
  selectedStyles: TabStyles
  hoverColor?: string
  selected?: number
  iconSize?: string
  selectedColor?: string
  defaultColor?: string
  reverse?: boolean
}

export type State = {
  selected: any
}

const ContentContainer = posed.div({
  enter: {
    maxHeight: 10000,
    transition: { ease: 'circIn', duration: 300 }
  },
  exit: {
    maxHeight: 0,
    transition: { ase: 'circIn', duration: 300 }

  }
})

const iconSizeClass = {
  s: 'md18',
  m: 'md24',
  l: 'md36',
  xl: 'md48'
}

export default class IconicalTabNav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: this.getInitialSelection(props)
    }
  }

  getInitialSelection(props: Props) {
    return props.selected === undefined ? 'none' : props.selected;
  }

  render() {
    const {
      tabs,
      showLabels,
      hideIcons,
      containerStyles,
      labelStyles,
      tabStyles,
      selectedStyles,
      hoverColor,
      iconSize,
      selectedColor,
      defaultColor,
      reverse
    } = this.props

    return (
      <div className={styles.wrapperContainer} style={{ flexDirection: reverse ? `column-reverse` : `column` }}>
        <div className={styles.itnContainer} style={containerStyles}>
          {tabs.map((tab: Tab, i: number) => {
            const selected = this.state.selected === i;
            const color = selected ? selectedColor : defaultColor;
            const combinedStyles = selected ? { ...selectedStyles, ...tabStyles } : tabStyles;
            return (
              <div className={styles.itnTab + ` ${selected ? styles.selectedTab : ''}`}
                onClick={() => { this.setState({ selected: i }) }}
                onMouseOver={(event) => event.currentTarget.style.backgroundColor = hoverColor || null}
                onMouseOut={(event) => event.currentTarget.style.backgroundColor = (tabStyles && tabStyles.backgroundColor) || 'transparent'}
                style={combinedStyles}>
                {!hideIcons &&
                  <span className={styles.itnTabLabel} style={{ ...labelStyles, color: color }}>
                    <i className={`material-icons ${iconSize && styles[iconSizeClass[iconSize]]}`}>
                      {tab.icon}
                    </i>
                  </span>
                }
                {showLabels &&
                  <span className={styles.itnTabLabel} style={{ ...labelStyles, color: color }}>
                    {tab.label}
                  </span>}
              </div>
            )
          })}
        </div>
        <PoseGroup>
          {tabs.map((tab: Tab, i: number) => {
            return (
              this.state.selected === i && <ContentContainer className={styles.contentContainer} key={i}>
                {tab.render()}
              </ContentContainer>)
          })}
        </PoseGroup>
      </div>
    )
  }
}
