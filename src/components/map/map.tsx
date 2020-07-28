import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {MapIconUrl} from "../../const";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._markers = leaflet.layerGroup();
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offers, hoveredOffer, currentOffer, currentCity} = this.props;
    const city = currentCity.coords;

    this._createMap(city);
    this._setMapView(city);
    this._setMapLayers();
    if (currentOffer) {
      this._renderMarkers([currentOffer, ...offers], hoveredOffer, currentOffer);
    } else {
      this._renderMarkers(offers);
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  componentDidUpdate() {
    const {offers, currentCity, hoveredOffer, currentOffer} = this.props;
    const city = currentCity.coords;

    this._removeMarkers();
    this._setMapView(city);
    if (currentOffer) {
      this._renderMarkers([currentOffer, ...offers], hoveredOffer, currentOffer);
    } else {
      this._renderMarkers(offers, hoveredOffer);
    }
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._mapContainer}></div>
    );
  }

  _createMap(city, zoom = 12) {
    this._map = leaflet.map(this._mapContainer.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
  }

  _setMapView(city, zoom = 12) {
    this._map.setView(city, zoom);
  }

  _setMapLayers() {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }

  _renderMarkers(offers, hoveredOffer, currentOffer, icon = this._getIcon(MapIconUrl.DEFAULT)) {
    offers.map((offer) => {
      if (currentOffer && offer.id === currentOffer.id) {
        this._renderMarker(offer, this._getIcon(MapIconUrl.ACTIVE));
      } else if (hoveredOffer && offer.id === hoveredOffer.id) {
        this._renderMarker(offer, this._getIcon(MapIconUrl.ACTIVE));
      } else {
        this._renderMarker(offer, icon);
      }
      this._markers.addTo(this._map);
    });
  }

  _removeMarkers() {
    if (this._map !== null) {
      this._markers.clearLayers();
    }
  }

  _renderMarker(offer, icon) {
    this._markers.addLayer(leaflet.marker(offer.coords, {icon}));
  }

  _getIcon(iconUrl) {
    return leaflet.icon({
      iconUrl,
      iconSize: [30, 30]
    });
  }
}

Map.propTypes = {
  currentOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        maxAdults: PropTypes.number.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.shape({
          name: PropTypes.string.isRequired,
          super: PropTypes.bool.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }).isRequired,
        city: PropTypes.shape({
          name: PropTypes.string.isRequired,
          coords: PropTypes.arrayOf(PropTypes.number).isRequired,
        }).isRequired,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired,
      }).isRequired
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  hoveredOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default Map;
