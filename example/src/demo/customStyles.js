import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

registerLanguage('jsx', jsx);

export default class CustomStyles extends Component {
    tabOne() {
        return (
            <p className="itn-demo-text">
                This is IconicalTabNav with custom styling and visible text labels.
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
        const selectedStyles = { borderBottom: '2px solid #602797' };

        return (
            <div className="itn-demo-container">
                <IconicalTabNav
                    tabs={
                        [
                            { label: 'Demo', icon: 'home', render: this.tabOne },
                            { label: 'Source Code', icon: 'code', render: this.codeTab }
                        ]
                    }
                    selected={0}
                    showLabels={true}
                    iconSize='l'
                    hoverColor="#ece8f5"
                    selectedStyles={selectedStyles}
                    selectedColor="#602797"
                    defaultColor="#d2b5f0" />
            </div>
        )
    }
}

const codeString = `
import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';

export default class CustomStyles extends Component {
    tabOne() {
        return (
            <p className="itn-demo-text">
                This is IconicalTabNav with custom styling and visible text labels.
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
        const selectedStyles = { borderBottom: '2px solid #602797' };

        return (
            <div className="itn-demo-container">
                <IconicalTabNav
                    tabs={
                        [
                            { label: 'Demo', icon: 'home', render: this.tabOne },
                            { label: 'Source Code', icon: 'code', render: this.codeTab }
                        ]
                    }
                    selected={0}
                    showLabels={true}
                    iconSize='l'
                    hoverColor="#ece8f5"
                    selectedStyles={selectedStyles}
                    selectedColor="#602797" 
                    defaultColor="#d2b5f0"/>
            </div>
        )
    }
}
`