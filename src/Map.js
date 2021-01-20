import {Map, InfoWindow, mapStyles,Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
const style = {
    width: '100%',
    height: '100%'
  }
  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
  }
  export class MapContainer extends Component {
    render() {
      return (
        <Map google={this.props.google} zoom={14}
   
          style={mapStyles}
          initialCenter={
              {
              lat: -1.2884,
              lng: 36.8233
          }
      }
      />
      );
    }
  }
   
  export default GoogleApiWrapper(
    (propos)=> ({
        apiKey: propos.apiKey
    }
  ))(MapContainer);