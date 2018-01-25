import React from 'react';
import './Slides.css';

class Slides extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "slides">
                <div>{this.props.name}</div>
                <div>{this.props.text}</div>
                <img className = "slides__image" src = {this.props.icon} alt="logo"/>
            </div>
        );
    }
}
export default Slides;