import React, { Component } from 'react';
import * as d3 from 'd3';

class Child1 extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    const data = this.props.data;
    // const margin = { top: 10, right: 10, bottom: 30, left: 20 },
    //     w = 500 - margin.left - margin.right,
    //     h = 300 - margin.top - margin.bottom;

    // const container = d3.select('.child1_svg')     
    // .attr('width', w + margin.left + margin.right)
    // .attr('height', h + margin.top + margin.bottom)
    // .select('g_1')
    // .attr('transform', `translate`)

  }

  render() {
    return (
      <div className='child1'>
        
      </div>

    );
  }
}

export default Child1;