import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render() {
        let pictures = this.props.picList.map((pics) => {
            return (<GalleryItem key = 'images' pics = {pics} addLike = {this.props.addLike}/>)
        })
        return (
            <div>
                {pictures}  
            </div>
        );
    }
}

export default GalleryList;