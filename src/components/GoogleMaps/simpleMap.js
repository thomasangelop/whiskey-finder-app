import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '80%'
};

const apiKey = require('../../apiKey');

const whiskeyLocations = {
    marvelBar: {
        name: 'Marvel Bar',
        whiskeyAvailable: 'Macallan 12yr, Macallan 15yr',
        position: {
            lat: 44.9858,
            lng: -93.2687
        }
    },
    spoonStable: {
        name: 'Spoon & Stable',
        whiskeyAvailable: 'Laphroig 10yr, Johnnie Walker Blue Label',
        position: {
            lat: 44.9856,
            lng: -93.2696
        }
    }
}

export class SimpleMaps extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
};

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
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
      >
        {/* {whiskeyLocations.map((location, i) => (
            <Marker 
                key={i}
                onClick={this.onMarkerClick}
                name={location.name}
                position={{
                    lat: location.position.lat,
                    lng: location.position.lng
                }}
            />
        ))}  */}
        <Marker
          onClick={this.onMarkerClick}
          name={'Marvel Bar'}
          position={{
            lat: 44.9858,
            lng: -93.2687
           }}
           whiskeyAvailable={'Macallan 12yr, Macallan 15yr'}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Minneapolis'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>Whiskey Available: 
             <ul>
              <li>{this.state.selectedPlace.whiskeyAvailable}</li>
             </ul>
            </p>
          </div>
        </InfoWindow>
      </Map>
      //TODO: 'Try and add a few more markers on your map and 
      //more interactivity to your infoWindow';
    );
  }
}

export default GoogleApiWrapper(apiKey)(SimpleMaps);