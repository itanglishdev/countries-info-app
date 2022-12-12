import GoogleMapReact from 'google-map-react';
import ShowNation from './ShowNation'

function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };


  return ( 
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <ShowNation 
        // values to add through context from picked nation
        // lat={59.955413}
        // lng={30.337844}
        />
      </GoogleMapReact>
    </div>
   );
}

export default Map;
