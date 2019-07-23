import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '80%'
};
const apiKey = require('../../apiKey');

console.log(apiKey);

export class SimpleMaps extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
         lat: 44.9778,
         lng: -93.2650
        }}
      />
    );
  }
}

export default GoogleApiWrapper(apiKey)(SimpleMaps);