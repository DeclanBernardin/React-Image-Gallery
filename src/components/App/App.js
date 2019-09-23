import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'; 
import axios from 'axios';


class App extends Component {

  state = {
    pic: [{}]
  }

componentDidMount(){
  console.log('app  Mounted');
  this.getImage();
}

  addLike = (id) => {
    console.log('test' + id);

    axios.put(`/gallery/${id}`)
      .then((response) => {
        console.log(response);
        this.getImage()
      }).catch((error) => {
        console.log(error);
      });
    console.log(this.state);

  }

  getImage = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log(response.data);
      this.setState({
        pic : response.data
      })
    }).catch((error) => {
      console.log(error);
    });
    console.log(this.state);
    
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Channel</h1>
          <div className="Tv-Logo">
             <img src="https://raw.githubusercontent.com/DeclanBernardin/react-gallery/master/public/images/TV-512.png?token=ALYA5RN5LLZHNNW3K72XMEC5MM4NM" alt="tv" width="100" height="100"/>
          </div>
        </header>
        <br/>
        <div className = "title">
        <h2 >Declan's Channel Gallery</h2>
        </div>
        <div className = "images">
        <GalleryList picList = {this.state.pic} addLike = {this.addLike}/>
        </div>
        
      </div>
    );
  }
}

export default App;
