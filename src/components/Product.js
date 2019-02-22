import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';

class Product extends Component {
    state = {
        posts: [],
        id: null,
        post: [],
        zoom: 15
    }
    componentDidMount() {
        let id = this.props.match.params.product_id;
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles.json`)
            .then(res => {
                this.setState({
                    posts: res.data,
                    id: id
            })
        })
    }

    render() {
        let myPost = this.state.posts.filter(post => {
            return post.id == this.state.id
        }).map(post => {
            return(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <LeafletMap center={[post.location.latitude, post.location.longitude]} zoom={this.state.zoom}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                        <Marker position={[post.location.latitude, post.location.longitude]}>
                    </Marker>
                    </LeafletMap>
                    <p><span>Description</span>: {post.description}</p>
                    <p><span>Status</span>: {post.status}</p>
                    <p><span>Details</span>: {post.collection_notes}</p>
                    <p><span>Location</span>: {post.location.town}, {post.location.country}</p>
                    <p><span>Expiry</span>: {post.expiry}</p>
                    <Link to={'/'}><button className="list-btn">Go back &larr;</button></Link>
                </div>
            )
        });
        return (
            <div className="single-post">{myPost}</div>
        )
    }
}

export default Product;