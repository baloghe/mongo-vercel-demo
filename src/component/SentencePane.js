import React, { useState, useEffect } from "react";

import megaphone from '../img/megaphone.png';
import prevBtn from '../img/previous-track-button.png';
import nextBtn from '../img/next-track-button.png';

import './SentencePane.css';

export default function SentencePane({ lang1, lang2, sent1, sent2, showPrev, showNext, playSound }){
	
	return (
			<div className="sentencepane">
				<div key="txt" className="sentence">
					<p key="1"><span className="lang">{lang1}</span> : <span className="sentence">{sent1}</span></p>
					<p key="2"><span className="lang">{lang2}</span> : <span className="sentence">{sent2}</span></p>
				</div>
				<div key="ctrl" className="controller">
					<div key="prv" className="arrow" onClick={showPrev}>
						<img src={nextBtn} className="hflip" alt="Prev" />
					</div>
					<div key="aux" className="audio" onClick={playSound}>
						<img src={megaphone} alt="Play" />
					</div>
					<div key="nxt" className="arrow" onClick={showNext}>
						<img src={nextBtn} alt="Next" />
					</div>
				</div>
			</div>
		);

}