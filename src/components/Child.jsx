import React from "react";
import {
    useLocation
  } from "react-router-dom";

function Child(props) {
    const location = useLocation();
    let id = location.pathname;
    var itemPost = props.posts.filter(function (displayPost) {
      let post_link = displayPost.link
        ? displayPost.link
        : displayPost.link;
        console.log(itemPost)
      return post_link === id;
    });
  
    return (
<div className="wrapper rev-block">
<div className="container">
      <div className="focus-focus-container">
         <div className="title-focus-container focusTitle">
            <h2 className="focus-title playfair">{itemPost[0].name}</h2>
         </div>
         <div className="img-focus-container focusImg" style={{background: '{itemPost[0].source}'}}>
         <img className="img-focus-container focusImg" src={itemPost[0].source} alt="" draggable="false" />
         </div>
      </div>
      <div className="large-desc">
         <div className="desc-content-container">
            <div className="desc-clear">
               <div className="item client">
                  <h3>CLIENT</h3>
                  <p><a href={itemPost[0].clientLink}>{itemPost[0].client}</a></p>
               </div>
               <div className="item year">
                  <h3>ANNÉE</h3>
                  <p>{itemPost[0].year}</p>
               </div>
               <div className="item cours">
                  <h3>DOMAINE</h3>
                  <p>{itemPost[0].domaine}</p>
               </div>
            </div>
            <div className="desc-txt">
               <p>{itemPost[0].desc}</p>
            </div>
         </div>
      </div>
      <div className="single-content-container">
         <div className="first-img-single single-img">
         <img src={itemPost[0].first} alt="" draggable="false" />
         </div>
         <div className="second-img-single single-img">
         <img src={itemPost[0].second} alt="" draggable="false" />
         </div>
      </div>
      <div className="pdfProject-container">
      {itemPost[0].pdf}
      </div>
   </div>
</div>
    );
  }
  export default Child;