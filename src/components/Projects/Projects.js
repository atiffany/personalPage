import React from 'react';
import { render } from 'react-dom';
import './Projects.css';
import Carousel from './Carousel';
import Slides from './Slides';

import data from './ProjectData.js';

class Project extends React.Component{
    constructor() {
        super();
        this.state = {
            activeSlide : 0,
        }
        this.handleLeftClicked = this.handleLeftClicked.bind(this);
        this.handleRightClicked = this.handleRightClicked.bind(this);
    }

    handleLeftClicked(e) {
        const newActiveSlide = this.state.activeSlide > 0 ? this.state.activeSlide-1 : data.length-1;
        <Carousel key={newActiveSlide} name={data[newActiveSlide].title} text={data[newActiveSlide].text} icon={data[newActiveSlide].icon} />
        this.setState({ activeSlide: newActiveSlide });


    }
    handleRightClicked(e) {
        const newActiveSlide = this.state.activeSlide < data.length-1 ? this.state.activeSlide+1 : 0;
        <Carousel key={newActiveSlide} name={data[newActiveSlide].title} text={data[newActiveSlide].text} icon={data[newActiveSlide].icon} />
        this.setState({ activeSlide: newActiveSlide });
    }

    renderCarouselSlides() {
        return (<Carousel key={this.state.activeSlide} name={data[this.state.activeSlide].title} text={data[this.state.activeSlide].text} icon={data[this.state.activeSlide].icon} />);
    }

    renderSlides() {
        return data.map((item, index) => {
            return (<Slides key={index} name={item.title} text={item.text} icon={item.icon}/>);
        });
    }

    render() {
        return (
            <div>
                <div className = "carousel--container">
                    <button className = "carousel__nav carousel__nav--left" onClick={this.handleLeftClicked}>&#60;</button>
                    <div className = "carousel__viewport">{ this.renderCarouselSlides() }</div>
                    <button className = "carousel__nav carousel__nav--right" onClick={this.handleRightClicked }>&#62;</button>
                </div>
                <div className = "slides--container">{ this.renderSlides() }</div>
            </div>
        );
    }
}

export default Project;