import React, { Component } from 'react';
//import GalleryList from '../GalleryList/GalleryList'
//import axios from 'axios';

class GalleryItem extends Component {


    state = {
        displayDescription : true
    }

    toggleDescription = () => {
        console.log('Toggled');
        this.setState({
            displayDescription: !this.state.displayDescription
        })
        
    }



    // addLike = (id) => {
    //     console.log('test' + id);
        
    //     axios.put(`/gallery/${id}`)
    //         .then((response) => {
    //             console.log(response);
                
    //         }).catch((error) => {
    //             console.log(error);
    //         });
    //     console.log(this.state);

    // }


    render() {
        return (
            <div className = "pictures">
                {this.state.displayDescription ?
                <img src={this.props.pics.image} alt='images' width="300" height="300" onClick={this.toggleDescription}/> 
                    : <p onClick = { this.toggleDescription }>{this.props.pics.description} </p>}
                <button className = "buttons" onClick={() => this.props.addLike(this.props.pics.id)} >❤</button>
                <h3>Hearts: {this.props.pics.likes}</h3>
            </div>
        );
    }
}

export default GalleryItem;