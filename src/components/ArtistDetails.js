import React, { Component } from 'react';
import $ from 'jquery';

class ArtistDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

 
  render() {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
     
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
     
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    var clickedArtist = getUrlParameter('artist');
    //var clickedArtist = "John Prine"
    console.log(clickedArtist);
    $.ajax({
        url: "http://ws.audioscrobbler.com/2.0/",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: {
          method: 'artist.getInfo',
          artist: clickedArtist,
          api_key : '278b674c37ebf25ee302d1bc7edb0b76',
          format : 'json'
        },
        cache: false,
        success: function(data) {
            $('#artist').html(data['artist']['name']);
            $('#artistbio').html(data['artist']['bio']['content']);
        }
    });

    
    return (
    <div>
       
      <div className="artists" id="artistList">
        <h3 id="artist"></h3>
        <p id="artistbio"></p>
      </div>
      

</div>
    )
  }
  
}

export default ArtistDetails;