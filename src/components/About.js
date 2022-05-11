import React from 'react'

export default function About(){
    return(
        <div id="App">
            <h1 id="p1">React Router Application</h1>
            <br/>
            
            <div id="part1">
            <p>Create an application in which user can view articles on different topics. The application should have the following links :-</p>
                <br/>
                <ul><li>About</li>
                <li>Articles</li>
                <li>Categories</li>
                <li>Subscribe</li>
                </ul>
            </div>
            <br/>
            <div id="part2">
            <strong>Description:-</strong>
            <ul><li><strong>About</strong>:Clicking on this link should render a component which will give a brief description of the application.</li> 
            <li><strong>Articles</strong>:Clicking on this link should render a component which will contain titles of different articles. Clicking on the title should display the entire article.</li> 
            <li><strong>Categories</strong>:This section contains different categories of articles. User can select any one of the categories.</li> 
            <li><strong>Subscribe</strong>:This section contains a single input field and a button. The user will enter the email in the input field.</li>
            </ul>
            </div>
            <br/>
            <div id="part3">
                <strong>Footer section</strong>:-
                <br/>
                <p>There should be two buttons in the footer section, <strong>back and next.</strong>
                <br/>By clicking on back button, previously visited component should be rendered. Next button will be used to go back to the current component.</p>

            </div>
        </div>
    )
}