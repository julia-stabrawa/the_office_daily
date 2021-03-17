import React, {useState} from "react";
import './Gif.scss';
import Text from "./Text";

function Gif() {
    const [gif, setGif] = useState([]);


    const getGif = async () => {
        const url = `https://g.tenor.com/v1/search?q=the office&key=PMHBBYHY9KSL`

        const response = await fetch(url)
        const responseJson = await response.json();

        if (responseJson.results) {
            setGif(responseJson.results);
        }
    }

    const randomGif = gif[Math.floor(Math.random() * gif.length)];

    return (
        <>
            <header>
                <h1>THE<span>OFFICE</span>DAILY</h1>
            </header>
            <div className="gif__container">
                <div className="gif__photo">{gif.length > 0 ?
                    <img src={randomGif.media[0].gif.url} alt="gif"/> :
                    <Text/>
                }</div>
                <button onClick={getGif}>DAILY GIF</button>
            </div>
        </>
    );
}

export default Gif;

