import * as React from 'react';
import Navbar from "../components/home/Navbar"

export default function About(){
    return (
        <div>
            <Navbar />
            <div>
                <h1 id="about-heading">About Us</h1>
                <center>
                    <div id="about-us-navbar">
                        <a href="">About Us</a>
                        <a href="">Masthead</a>
                        <a href="">Advisory Board</a>
                        <a href="">Join Our Team</a>
                        <a href="">Write For Us</a>
                        <a href="">Advertise</a>
                        <a href="">Diversity and Inclusion</a>
                        <a href="">Contact Us</a>
                    </div>
                </center>
                
                <div class="about-section">
                    <div>
                        <h3 class="sub-heading">What is Community Corner?</h3>
                        <p>Enter stuff about who we are, our purpose, etc</p>
                    </div>
                    <img src="../assets/Logo.png" alt="Image"/>
                </div>

                <div class="about-section">
                    <div>
                        <h3 class="sub-heading">Who Are We?</h3>
                        <p>Enter stuff about who we are, our purpose, etc</p>
                    </div>
                    <img src="../assets/Logo.png" alt="Image"/>
                </div>

                <div class="about-section">
                    <div>
                        <h3 class="sub-heading">What Do We Publish?</h3>
                        <p>Enter stuff about who we are, our purpose, etc</p>
                    </div>
                    <img src="../assets/Logo.png" alt="Image"/>
                </div>

                <div class="about-section">
                    <div>
                        <h3 class="sub-heading">History of Community Corner</h3>
                        <p>Enter stuff about who we are, our purpose, etc</p>
                    </div>
                    <img src="../assets/Logo.png" alt="Image"/>
                </div>
                
                
            </div>
        </div>
    )
}