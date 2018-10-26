import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

registerLanguage('jsx', jsx);

export default class Labels extends Component {
  tabOne() {
    return (
      <p className="itn-demo-text">
        This is IconicalTabNav with default styling and visible text labels.
      </p>
    )
  }

  codeTab() {
    return (
      <SyntaxHighlighter language='jsx' style={atomDark} customStyle={{ fontSize: '12px', margin: '0', width: '100%' }} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    )
  }

  render() {
    return (
      <div className="itn-demo-container">
        <IconicalTabNav selected={0} showLabels={true} tabs={
          [
            { label: 'Demo', icon: 'home', render: this.tabOne },
            { label: 'Source Code', icon: 'code', render: this.codeTab }
          ]
        } />
      </div>
    )
  }
}

const codeString = `
import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';

export default class Labels extends Component {
    tabOne() {
      return (
        <p className="itn-demo-text">
          This is IconicalTabNav with default styling and showing Labels.
        </p>
      )
    }
  
    codeTab() {
      return (
        <SyntaxHighlighter language='jsx' style={atomDark} customStyle={{ fontSize: '12px', margin: '0' }} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      )
    }
  
    render() {
      return (
        <div className="itn-demo-container">
          <IconicalTabNav selected={0} showLabels={true} tabs={
            [
              { label: 'Demo', icon: 'home', render: this.tabOne },
              { label: 'Source Code', icon: 'code', render: this.codeTab }
            ]
          } />
        </div>
      )
    }
  }
`