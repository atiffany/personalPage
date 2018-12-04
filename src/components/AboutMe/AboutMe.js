import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className = "Wrapper">
            <div >
                <h2 className = "CenteredText">About</h2>
            </div>
            <div>
              <div>
              <img src = "https://avatars3.githubusercontent.com/u/22308061?s=460&v=4" className = "RoundedImage CenteredImage" alt = "Abby Tiffany" height = "225" />
              </div>

                <div className = "CenteredText">
                  <div>
                  Abby Tiffany is a Software Engineer.
                  </div>
                  <div>
                  Specialities include: Swift, Python, Go, Javascript, Java
                  </div>
                  <div>
                  Hobbies include: biking, climbing, running, snowboarding, volleyball
                  </div>
                </div>
            </div>
        </div>
    );
}
