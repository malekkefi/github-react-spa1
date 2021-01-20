import React, { Component } from "react";
class Photo extends Component {
    render(){
        return(
            <div>
                <h2>Welcome to my App</h2>
                <img src="/images/20.jpg" alt=""></img>
                <img src="/images/30.jpg" alt="" class="center"></img>
                <img src="/images/80.jpg" alt=""></img>
            </div>
        );
    }

}
export default Photo;
