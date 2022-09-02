import React from 'react'
import GoogleMapReact from 'google-map-react';

//Style
import { map } from '../map/map.module.css'

//Components
import Pin from './Pin';

export default function Map() {
    const defaultProps = {
        center: {
          lat: 53.7259687244842, 
          lng: -1.816018030523223
        },
        zoom: 15
      };
    
      return (
        // Important! Always set the container height explicitly
        <div className={ map }>
          <div>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAqVloqR8PVG3P6zSOHAhWoy71JsRpZI9E" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              trackViewChanges={false}
            >
              <Pin
                lat={53.725971501599595}
                lng={-1.8160160188665384}
              />
            </GoogleMapReact>
          </div>
        </div>
      );
    }
