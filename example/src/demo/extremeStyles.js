import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

registerLanguage('jsx', jsx);

export default class ExtremeStyles extends Component {
    tabOne() {
        return (
            <p className="itn-demo-text">
                This is IconicalTabNav with heavy custom styling to demonstrate the flexibility of the component with regards to it's style.
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
        const containerStyles = { alignItems: 'center', justifyContent: 'space-around', height: '120px' };
        const tabStyles = { backgroundColor: 'black', borderRadius: '50%', flex: '0 0 0%', height: '100px', minWidth: '100px' };
        const selectedStyles = { border: '2px solid #79a6f6' };

        return (
            <div className="itn-demo-container" style={{ 'flex-direction': 'row' }}>
                <IconicalTabNav
                    tabs={
                        [
                            { label: 'Demo', icon: 'face', render: this.tabOne },
                            { label: 'Source Code', icon: 'code', render: this.codeTab }
                        ]
                    }
                    selected={0}
                    iconSize='xl'
                    hoverColor="#25467a"
                    containerStyles={containerStyles}
                    tabStyles={tabStyles}
                    selectedStyles={selectedStyles}
                    selectedColor="#79a6f6"
                    defaultColor="#e1ebf7" />
            </div>
        )
    }
}

const codeString = `
import React, { Component } from 'react'
import IconicalTabNav from 'iconical-tab-nav';

export default class ExtremeStyles extends Component {
    tabOne() {
        return (
            <p className="itn-demo-text">
                This is IconicalTabNav with heavy custom styling to demonstrate the flexibility of the component with regards to it's style.
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
        const containerStyles = { alignItems: 'center', justifyContent: 'space-around', height: '120px' };
        const tabStyles = { backgroundColor: 'black', borderRadius: '50%', flex: '0 0 0%', height: '100px', minWidth: '100px' };
        const selectedStyles = { border: '2px solid #79a6f6' };

        return (
            <div className="itn-demo-container" style={{ 'flex-direction': 'row' }}>
                <IconicalTabNav
                    tabs={
                        [
                            { label: 'Demo', icon: 'face', render: this.tabOne },
                            { label: 'Source Code', icon: 'code', render: this.codeTab }
                        ]
                    }
                    selected={0}
                    iconSize='xl'
                    hoverColor="#25467a"
                    containerStyles={containerStyles}
                    tabStyles={tabStyles}
                    selectedStyles={selectedStyles}
                    selectedColor="#79a6f6"
                    defaultColor="#e1ebf7" />
            </div>
        )
    }
}
`