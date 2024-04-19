import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
import tips from './tips.csv';
import Child1 from './Child1';
import Child2 from './Child2';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	componentDidMount() {
    d3.csv(tips, (d) => {
      return {
        tip: parseFloat(d.tip),
        total_bill: parseFloat(d.total_bill),
        day: d.day
      }
    }).then((csvData) => {
        this.setState({ data: csvData });
      })
      .catch((e) => {
        console.error('Error loading CSV:', e);
      });
	}

	render() {
		return (
			<div className="parent">
				<Child1 data={this.state.data}></Child1>
				<Child2 data={this.state.data}></Child2>
			</div>
		);
	}
}

export default App;