import React from 'react'

class CoordinatesButton extends React.Component {

	getCoordinates = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render(){
		return(
		<div>
			<button onClick={this.getCoordinates}/>
		</div>
	)}
};

export default CoordinatesButton