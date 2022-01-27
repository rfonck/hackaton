import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	incrementCount(){
		this.setState({
			count: this.state.count + 1
		});
	}

	decrementCount(){
		this.setState({
			count: this.state.count - 1
		});
	}

	render(){
		const baseClass = 'counter';
		const buttonBgState = this.state.count <= 0 ? 'bg-red' : 'bg-blue';
		return (
		<div className={`${baseClass} ${buttonBgState}`} data-foo={this.state.count}>
			<button type="button" onClick={this.decrementCount.bind(this)}>-</button>
			<h1>{this.state.count}</h1>
			<button type="button" onClick={this.incrementCount.bind(this)}>+</button>
		</div>
		);
	}
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;