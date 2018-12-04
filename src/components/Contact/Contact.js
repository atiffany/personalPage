import React from 'react';
import styles from './Contact.css'
import linkedIn from '../../Images/linkedIn.png';
import gmail from '../../Images/gmail.png';
import github from '../../Images/github.png';

export default function Contact() {
    return (
      <div className = "Wrapper">
        <h2 className = "CenteredText">Contact Abby</h2>

        <div className = "CenteredText">
          <div className = "ContactImage SpaceBetween">
          <a href = "mailto:abby.tiffany@gmail.com?Subject=Hello%20There">
            <img src = {gmail}/>
          </a>
          </div>

          <div className = "ContactImage SpaceBetween">
          <a href = "https://linkedin.com/in/abbytiffany">
            <img src = {linkedIn}/>
          </a>
          </div>

          <div className = "ContactImage SpaceBetween">
          <a href = "https://github.com/atiffany">
            <img src = {github}/>
          </a>
          </div>
          
        </div>
      </div>

    );
}
