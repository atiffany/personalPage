import React from 'react';
import './Carousel.css';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="image--container">
                <div className="carousel__item carousel__item--title">{ this.props.name }</div>
                <img className="carousel__item carousel__item--image" src={ this.props.icon } alt="logo" />
                <div className="carousel__item">{ this.props.text }</div>
            </div>
        )
    }
}

export default Carousel;