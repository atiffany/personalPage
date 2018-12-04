import React from 'react';
import {
    BrowserRouter,
    Link
} from 'react-browser-router';
import './Navigation.css';
import navigationIcon from './menu.png';

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            toggled: false,
        };
    }

    toggle = () => {
        const toggled = !this.state.toggled;
        this.setState({ toggled });
    }

    render() {
        console.log('toggled: ', this.state.toggled);
        return (
            <div className = "Navigation">
                <BrowserRouter>
                    <div onClick={this.toggle}>
                        <img className = "Navigation--icon" src={navigationIcon} alt="navigation icon" onClick={this.toggle} />
                        <div className = {this.state.toggled ? "Navigation--links__clicked" : "Navigation--links"}>
                            <div className = "Navigation--links__item Navigation--links__item__clicked">Abby Tiffany</div>
                            <div className = "Navigation--links__item Navigation--links__clickable--item Navigation--links__item__clicked"><Link to="/about">About Me</Link></div>
                            <div className = "Navigation--links__item Navigation--links__clickable--item Navigation--links__item__clicked"><Link to="/connect">Connect</Link></div>
                        </div>
                    </div>
                </BrowserRouter>
          </div>
        );
    };
}
export default Navigation;
