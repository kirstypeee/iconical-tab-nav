import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

registerLanguage('jsx', jsx);

export default class Basic extends Component {
  tabOne() {
    return (
      <p className="itn-demo-text">
        This is the most basic usage of IconicalTabNav with default styling and props.
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
        <IconicalTabNav selected={0} tabs={
          [
            { icon: 'home', render: this.tabOne },
            { icon: 'code', render: this.codeTab }
          ]
        } />
      </div>
    )
  }
}

const codeString = `
import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';

export default class Basic extends Component {
  tabOne() {
    return (
      <div>
        Tab One
      </div>
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
        <IconicalTabNav selected={0} tabs={
          [
            { icon: 'home', render: this.tabOne },
            { icon: 'code', render: this.codeTab }
          ]
        } />
      </div>
    )
  }
}
`