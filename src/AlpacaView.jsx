import Preview from "./Preview";
import Settings from "./Settings";
import { useState } from "react";
import Details from "./Details";

export default function AlpacaView() {

    const [currentCarac, setCurrentCarac] = useState("")
    const [alpacaImage, setAlpacaImage] = useState({
        backgrounds: "./alpaca/backgrounds/darkblue70.png",
        neck: "./alpaca/neck/default.png",
        nose: "./alpaca/nose/nose.png",
        mouth: "./alpaca/mouth/default.png",
        leg: "./alpaca/leg/default.png",
        hair: "./alpaca/hair/default.png",
        eyes: "./alpaca/eyes/default.png",
        ears: "./alpaca/ears/default.png",
        accessories: ""
    })

    const obj = {
        accessories: ["earings", "flower", "glasses", "headphone"],
        backgrounds: ["blue50", "blue60", "blue70", "darkblue50"],
        ears: ["default", "tilt-backward", "tilt-forward"],
        eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
        hair: ["default", "bang", "curls", "elegant", "fancy"],
        leg: ["default", "bubble-tea", "cookie", "game-console"],
        mouth: ["default", "astonished", "eating", "laugh", "tongue"],
        neck: ["default", "thick", "bend-forward", "bend-backward"],
        nose: ["nose"]
    }

    const handleClick = (carac) => {
        setCurrentCarac(carac)

    }

    const handleClickDetails = (e, carac) => {
        const value = e.target.textContent.trim();
        const path = `./alpaca/${carac}/${value}.png`;
        const newAlpaca = { ...alpacaImage, [carac]: path };
        setAlpacaImage(newAlpaca);
    }
    const random = () => {
        const randomObj = { ...alpacaImage }
        for(const key in obj ){
            const value = obj[key];
            const index = Math.floor(Math.random()* value.length)
            randomObj[key] = `./alpaca/${key}/${value[index]}.png`;
        }

        setAlpacaImage(randomObj)
    }
    

    return (
        <div>
            <div>
                <Preview alpaca={alpacaImage} />
                <button onClick={random}> Random</button>
            </div>
            <div>
                <h3> Accessorize the Alpaca's</h3>
               
                <div>
                    <Settings value="Hair" handleClick={() => handleClick("hair")} />
                    <Settings value="Ears" handleClick={() => handleClick("ears")} />
                    <Settings value="Eyes" handleClick={() => handleClick("eyes")} />
                </div>
                <div>
                    <Settings value="Mouth" handleClick={() => handleClick("mouth")} />
                    <Settings value="Neck" handleClick={() => handleClick("neck")} />
                    <Settings value="Leg" handleClick={() => handleClick("leg")} />
                </div>
                <div>
                    <Settings value="Accessories" handleClick={() => handleClick("accessories")} />
                    <Settings value="Background" handleClick={() => handleClick("backgrounds")} />
                </div>

                {currentCarac && <div > <h4> Styles </h4><Details list={obj[currentCarac]}
                    handleClickDetail={(e) => handleClickDetails(e, currentCarac)} /></div>}
            </div>

            
        </div>
    )
}