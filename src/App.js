import React from "react";
import "./index.scss";
import { useState } from "react";

const Modal = ({ showing, setShowing }) => (
	<div className={`overlay animated ${showing ? "show" : ""}`}>
		<div className="modal">
			<svg
				onClick={() => setShowing(false)}
				height="200"
				viewBox="0 0 200 200"
				width="200"
			>
				<title />
				<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
			</svg>
			<img
				src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
				alt="img"
			/>
		</div>
	</div>
);

function App() {
	const [showing, setShowing] = useState(false);

	return (
		<div className="App">
			<button onClick={() => setShowing(true)} className="open-modal-btn">
				✨ Открыть окно
			</button>
			<Modal showing={showing} setShowing={setShowing} />
		</div>
	);
}

export default App;
