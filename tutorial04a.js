import React, { Component } from 'react';
import { saveAs } from 'file-saver';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleExportLogs = this.handleExportLogs.bind(this);
    }

    handleExportLogs() {
        ... // what happens when button gets clicked
    }

render() {
        return (
                <div><button onClick={this.handleExportLogs}>Export to CSV</button></div>
        );
    }
}
