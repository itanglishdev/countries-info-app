import GoogleMapReact from 'google-map-react';
import ShowNation from './ShowNation'
import BackButton from './BackButton';

function Map({nationName}) {

  /** nationName info are used as
   * defaultProps = {
   * center: {
   * lat: nationName.lat[0],
   * lng: nationName.lan[1]},
   * zoom: toBeSet
   * } */

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };


  return ( 
    <div className='map'>
        <BackButton/>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        // ? lat and lan come out as nationName.lat[0] and nationName.lan[1]
        defaultZoom={defaultProps.zoom}
      >
        <ShowNation 
        />
      </GoogleMapReact>
    </div>
   );
}

export default Map;
