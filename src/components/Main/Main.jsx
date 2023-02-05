import React from "react";
import Programma from "./Programma/Programma";
import BlockAdvantages from "./Advantages/Blockadvantages";
import Howstudy from "./Howstudy/Howstudy";
import Helpandstudy from "./Helpandstudy/Helpandstudy";
import PriceAndRules from "./Price/PriceAndRules";


const Main = () => {

    return (
        <main className="main">
            <Programma />
            <BlockAdvantages />
            <Howstudy />
            <div className="main-bgcolor">
                <Helpandstudy />
                <PriceAndRules />
            </div>
        </main>
    );
}

export default Main;