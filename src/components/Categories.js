import React from 'react'
//import '../components/Categories.css'
import './Categories.css';

export function Categories(){
   return(
       <div id="categories">
           <div className="wrapper">
               <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651719583bestprogramminglanguage-scaled.jpg" alt=""/>
               <div className="content-div">
                   <h2 className="post-title">Which Programming Language Should I Learn First in 2022?</h2>
                   <p className="category-name">Programming</p>
                   <p className="author">Joel Falconer, <span>May 04</span></p>
                   <p>It's hard to decide on a programming language to learn first. Here's a look at the most popular languages in 2022, and why they're worthwhile.</p>
               </div>
           </div>
           <div className="wrapper">
               <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651637815cpds-scaled.jpg" alt=""/>
               <div className="content-div">
                   <h2 className="post-title">How to Create a Color Palette for Your Design System</h2>
                   <p className="category-name">Design & UX</p>
                   <p className="author">SitePoint Team, <span>May 03</span></p>
                   <p>A color palette is one of the most important aspects of a design system. Designers can use them to create a visual hierarchy, a unified look and feel, and evoke emotions.</p>
               </div>
           </div>
           <div className="wrapper">
               <img src="https://uploads.sitepoint.com/wp-content/uploads/2022/05/1651545056webflow.jpg" alt=""/>
               <div className="content-div">
                   <h2 className="post-title">Webflow Review: Is It a Serious Option for Tech-Savvy Users?</h2>
                   <p className="category-name">Computing</p>
                   <p className="author">Alex Walker, <span>May 02</span></p>
                   <p>Find out if Webflow is a viable option for tech-savvy users who want to build custom websites. This review covers the pros and cons of using this online builder service.</p>
               </div>
           </div>
       </div>
   );
}

