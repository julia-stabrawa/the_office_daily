import React, {useState, useEffect} from "react";
import './Gif.css';

function Gif() {
    const [gif, setGif] = useState([]);


    const getGif = async () => {
        const url = `https://g.tenor.com/v1/search?q=the office&key=PMHBBYHY9KSL&limit=200`

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.results) {
            setGif(responseJson.results);
        }
    }

    // useEffect(() => {
    //     getGif();
    // }, [searchValue])

    const randomGif = gif[Math.floor(Math.random() * gif.length)];

    console.log(gif);
    // console.log(randomGif.media[0].gif.url);


    return (
        <>
            <header>
                <h1>THE<span>OFFICE</span>DAILY</h1>
            </header>
            <div className="gif__container">
                <div className="gif__photo">{gif.length > 0 ?
                    <img src={randomGif.media[0].gif.url}/> :
                    <p>Click the button to get your office gif of the day</p>
                }</div>
                <button onClick={getGif}>DAILY GIF</button>
            </div>
        </>
    );
}

export default Gif;
