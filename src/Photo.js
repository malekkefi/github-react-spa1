import React, { Component } from "react";
class Photo extends Component {
    render(){
        return(
            <div>
                <h2>Welcome to my App</h2>
                <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt=""></img>
                <img src="/images/30.jpg" alt="" class="center"></img>
                <img src="/images/80.jpg" alt=""></img>
            </div>
        );
    }

}
export default Photo;
