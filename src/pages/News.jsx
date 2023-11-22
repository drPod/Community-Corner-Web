import * as React from 'react';
import Navbar from "../components/home/Navbar"

export default function News(){
    return (
        <div>
            <Navbar />
            <div>
                <h1 class="news-heading">News</h1>
                <div class="news-column">
    
                    <div>
                        <div class="news-section">
                            <div class="news-image">Enter image</div>
                            <div>
                                <h3>Article #1</h3>
                                <p>Article description</p>
                                <button class="news-button">Read More</button>
                            </div>
                        </div>

                        <div class="news-section">
                            <div class="news-image">Enter image</div>
                            <div>
                                <h3>Article #2</h3>
                                <p>Article description</p>
                                <button class="news-button">Read More</button>
                            </div>
                        </div>

                        <div class="news-section">
                            <div class="news-image">Enter image</div>
                            <div>
                                <h3>Article #3</h3>
                                <p>Article description</p>
                                <button class="news-button">Read More</button>
                            </div>
                        </div>

                        <div class="news-section">
                            <div class="news-image">Enter image</div>
                            <div>
                                <h3>Article #4</h3>
                                <p>Article description</p>
                                <button class="news-button">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div class="list-column">
                        <h1 class="list-heading">Exciting Reads</h1>
                        <ul>
                            <li>Number 1</li>
                            <li>Number 2</li>
                            <li>Number 3</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}