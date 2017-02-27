import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import css from '../../styles/experiences/create.scss';



class AddSong extends Component{
	constructor(props){
		super(props)

		this.getArtistAlbums = this.getArtistAlbums.bind(this)
		this.showStuff = this.showStuff.bind(this)
		this.handleArtistChange = this.handleArtistChange.bind(this)
		this.handleTrackChange = this.handleTrackChange.bind(this)
		this.playMusic = this.playMusic.bind(this)
		this.stopMusic = this.stopMusic.bind(this)
		this.selectTrack = this.selectTrack.bind(this)



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

selectTrack(savedId){
	this.props.onSelect(savedId)
this.setState({trackId: savedId});
console.log("trackId=====>>", this.state.trackId)

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
		//console.log('track=====>', this.state.track)
		//console.log('artist', this.state.artist)

    axios.get(`https://api.spotify.com/v1/search?q=track%3A${this.state.track}+artist%3A${this.state.artist}&type=track `)
    	.then((artistInfo)=>{
    		this.setState({artistInfo: artistInfo})
    	})
	}

	showStuff(){
		if(!this.state.artist|| !this.state.track) {
			return ""
		}
		else if (this.state && this.state.artistInfo && this.state.artistInfo.data && this.state.artistInfo.data.tracks && this.state.artistInfo.data.tracks.items){
				const result = this.state.artistInfo.data.tracks.items
				//console.log('result ====>',result);
			return (
				<div>



					{result.map((track, index) => {
						const audioObject = new Audio(track.preview_url)
						const savedInfo = track.id


						return <div key={index}>
						<div className="song-info">
							{track.name}
							<br/>
							{track.artists[0].name}
							<br />
						</div>
						<img src={track.album.images[1].url} />
						<br/>
						<button className="next-button" id={index} onClick={() => this.playMusic(audioObject)}>
							PLAY
						</button>

						<button className="next-button" id={index} onClick={() => this.stopMusic(audioObject)}>
							STOP
						</button>
						<br/>
						
						{savedInfo === this.props.selectedSong ?
								<button className="form-button"> SELECTED </button>
						    : <button className="form-button" id={index} onClick={(e) => this.props.onSelect(e, savedInfo)}>
						    	CHOOSE TRACK
									</button>
						 }


						<br />
						<br />
						<br />


						</div>
					})}
				</div>
			)
		}
	}


	render(){

					return(
				<div>
					<div className="story-questions">Is There Any Song That Would Enhance This Memory?</div>

						<div>
							<input type="text" placeholder="Artist Name" onChange={this.handleArtistChange.bind(this)}/>
							<br />
							<input type="text" placeholder="Song Title" onChange={this.handleTrackChange.bind(this)}/>
							<br />
							<button className="form-button" onClick={this.getArtistAlbums.bind(this)}>SEARCH</button>
						</div>

						<ul>
            {this.showStuff()}

            </ul>


				</div>
			)
		}


}

export default AddSong;
