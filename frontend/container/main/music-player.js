import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';



class playSong extends Component{
	constructor(props){
		super(props)
		this.getSong= this.getSong.bind(this)
		this.showStuff = this.showStuff.bind(this)
		this.playMusic = this.playMusic.bind(this)
		this.stopMusic = this.stopMusic.bind(this)
		this.state ={
			songs:[],
			artist: "",
			track:"",
			artistInfo: []
		}
	}

		componentDidMount(){
				this.getSong();
		}


	playMusic(audioObject){
			audioObject.play();
	}

	stopMusic(audioObject){
			audioObject.pause();
	}



	getSong(){
    axios.get(`https://api.spotify.com/v1/tracks/${this.props.songURI}`)
    	.then((response)=>{
    		this.setState({songInfo: response.data});
    	})
	}

	showStuff(){
		if (this.state && this.state.songInfo &&
							this.state.songInfo.name &&
							this.state.songInfo.album.images[1].url &&
							this.state.songInfo.artists[0].name &&
							this.state.songInfo.preview_url){

			const song = this.state.songInfo;
			const audioObject = new Audio(song.preview_url);
			return (
				<div>
						{song.name}
						<br/>
						<img src={song.album.images[1].url} />
						<br/>
						<button onClick={() => this.playMusic(audioObject)}>
							Play
						</button>

						<button onClick={() => this.stopMusic(audioObject)}>
							Stop
						</button>
						<br/>
						{song.artists[0].name}
				</div>
			)
		}
	}


	render(){
		console.log("Music Player State =====>",this.state)
		console.log("Music Player Props =====>",this.props)
		return(
				<div>
            {this.showStuff()}
				</div>
			)
		}


}

export default playSong;
