import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from './Spinner.js';
import SentencePane from './SentencePane.js';

import './App.css';

export default function App({ conv }){
	
	const [appState, setAppState] = useState("ready");
	const [idx, setIdx] = useState(0);
	const [actError, setActError] = useState("");
	const [audioSrc, setAudioSrc] = useState(null);
	
	//console.log(`App started...`);
	
	useEffect(() => {
		preloadMp3();
	  }, []);
	
	//idx should loop through sentences
	const stepIdx = (direction) => {
		let newIdx = idx;
		if(direction >= 0){
			newIdx++;
		} else {
			newIdx--;
		}
		if(newIdx >= conv.sentences.length){
			newIdx = 0;
		} else if(newIdx < 0) {
			newIdx = conv.sentences.length - 1;
		}
		setIdx(newIdx);
	};

	//preload mp3
	const preloadMp3 = () => {
		const request = {audio: conv.audio};
		setAppState("loading");
		axios
		.post(`/api/mp3`, request,  {responseType: 'blob' } ) //unless correct responseType set, string is returned
		.then( ( response ) => {
			let url      = URL.createObjectURL( new Blob( [response.data] ) );
			setAudioSrc( url );
			setAppState("ready");
		 } )
		.catch(error => {
			setAppState("error");
			setActError(error);
		});
	};
	
	const showPrev = () => stepIdx(-1);
	const showNext = () => stepIdx(1);
	
	const playSound = () => {
		//TBD play section needed
		if(audioSrc != null){
			const atg = new Audio(audioSrc);
			atg.currentTime = conv.sentences[idx].audio.start / 1000.0; //position needed as seconds
			atg.load();
			atg.play();
			let playlen = conv.sentences[idx].audio.end - conv.sentences[idx].audio.start; //length needed as millisec
			const i = setInterval(()=>atg.pause(), playlen);
		} else {
			console.log('audio not ready!');
		}
	};
	
	if(appState === "loading"){
 		return (
			<div>
				<p>Loading audio</p>
				<Spinner />
			</div>
		);
	} else if(appState === "error"){
 		return (
			<div>
				<h1>Error</h1>
				<p>{actError}</p>
			</div>
		);
	} else {
 		return (
			<div>
				<h3>{conv.title}</h3>
				<div className="questionnumber">
					<span key="act" className="actNum">{idx+1}</span> / <span key="tot" className="totNum">{conv.sentences.length}</span>
				</div>
				<SentencePane
					lang1 = "EN"
					lang2 = "TR"
					sent1 = {conv.sentences[idx].EN}
					sent2 = {conv.sentences[idx].TR}
					showPrev = {showPrev}
					showNext = {showNext}
					playSound = {playSound}
				/>
			</div>
		);
	}

}