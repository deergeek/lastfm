import React, { Component } from 'react';
import $ from 'jquery';

class ArtistList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     artistList: [],
     artistContent: ''
    };

    this._handleArtistClick = this._handleArtistClick.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleChangeMsg = this._handleChangeMsg.bind(this);
  }

  _handleArtistClick(e) {
      console.log('click');
      window.location.href='/details?artist='+ e.target.innerText;
  }
  
  _handleChange(e) {
  }
  
  _handleChangeMsg(e) {
  }

  _handleSubmit(e) {
   
    e.preventDefault();

    $.ajax({
      url: "http://ws.audioscrobbler.com/2.0/",
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      data: {
        method: 'artist.search',
        artist: $('#artist').val(),
        api_key : '278b674c37ebf25ee302d1bc7edb0b76',
        format : 'json'
      },
      cache: false,
      success: function(data) {
        // Success..
        const artists = data['results']['artistmatches']['artist'];
        
        this.setState({
            artistList: artists
        });
      }.bind(this),
      // Fail..
      error: function(xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        
      }.bind(this)
    });

   
}
 
  render() {
    function handleCheck(e){
       // console.log(e.target);
    }
    const items = this.state.artistList.map((item, index) =>
    <li key={index} onClick={this._handleArtistClick}>{item.name}</li>
    );
    return (
    <div>
       
      <div className="artists" id="artistList">
        <div className="filter">
        <form id="searchartists" onSubmit={this._handleSubmit}>
          <input type="text" placeholder="Search Artist" name="artist" id='artist' onChange={this._handleChange} />
          <button type='submit'>Go</button>
        </form>
        </div>
        
        <ul id="results">{items}</ul>
        <p id="artistbio"></p>
        
      </div>
      

</div>
    )
  }
  
}

export default ArtistList;