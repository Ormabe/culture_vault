import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';



class AddSong extends Component{
	constructor(props){
		super(props)

		this.getArtistAlbums = this.getArtistAlbums.bind(this)
		this.showStuff = this.showStuff.bind(this)
		this.handleArtistChange = this.handleArtistChange.bind(this)
		this.handleTrackChange = this.handleTrackChange.bind(this)
		this.playMusic = this.playMusic.bind(this)
		this.stopMusic = this.stopMusic.bind(this)


		this.state ={
			songs:[],
			artist: "",
			track:"",
			artistInfo: []
		}
	}

	playMusic(audioObject){
			audioObject.play();
	}

		stopMusic(audioObject){
			audioObject.pause();
	}


	handleArtistChange(event){
		event.preventDefault();
		this.setState({artist: event.target.value});
	}

	handleTrackChange(event){
		event.preventDefault();
		const track = event.target.value.split(' ').join('+')
		this.setState({track: track});
	}



	getArtistAlbums(event){
		event.preventDefault();
		console.log('track', this.state.artist)
		console.log('artist', this.state.track)

    axios.get(`https://api.spotify.com/v1/search?q=track%3A${this.state.track}+artist%3A${this.state.artist}&type=track `)
    	.then((artistInfo)=>{
    		this.setState({artistInfo: artistInfo});
    	})
	}

	showStuff(){
		console.log(this.state);
		if(!this.state.artist|| !this.state.track) {
			return <p>"...no state yet"</p>
		}
		else if (this.state && this.state.artistInfo && this.state.artistInfo.data && this.state.artistInfo.data.tracks && this.state.artistInfo.data.tracks.items){
				const result = this.state.artistInfo.data.tracks.items
				console.log('result ====>',result);
			return (
				<div>



					{result.map((track, index) => {
						const audioObject = new Audio(track.preview_url);


						return <li key={index}>

						{track.name}
						<br/>
						<img src={track.album.images[1].url} />
						<br/>
						<button id={index} onClick={() => this.playMusic(audioObject)}>
							Play
						</button>

						<button id={index} onClick={() => this.stopMusic(audioObject)}>
							Stop
						</button>
						<br/>
						{track.artists[0].name}
						<br/>

						<br/>


						</li>
					})}
				</div>
			)
		}
	}


	render(){
			return(
				<div>
					<p>"Is there music that would enhance this memory?"</p>

						<form onSubmit={this.getArtistAlbums.bind(this)}>
							<input type="text" placeholder="Artist Name" onChange={this.handleArtistChange.bind(this)}/>
							<br />
							<input type="text" placeholder="Song Title" onChange={this.handleTrackChange.bind(this)}/>
							<button type="submit">SUBMIT</button>
						</form>

						<ul>
            {this.showStuff()}
            </ul>


				</div>
			)
		}


}

export default AddSong;
