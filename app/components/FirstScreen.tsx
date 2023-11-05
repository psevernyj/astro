import React from 'react';
import "../styles/firstScreen.scss";
import Image from "next/image";
import lhand from"../assets/hand1.png";
import rhand from"../assets/hand2.png";

const FirstScreen = () => {
    return (
        <div className={"main container firstScreen"}>
            <div className={"bg"}>
                <Image className={"l"} src={lhand} alt={"Background"}/>
                <Image className={"r"} src={rhand} alt={"Background"}/>
            </div>
            <div className={"content"}>
                <h1 className={"generalTitle title"}>
                    хто володіє інформацією <br/>
                    той володіє життям
                </h1>
                <p className={"generalSubtitle"}>
                    паспорт у світ, де ви володар
                </p>
                <button className={"primaryBtn"}>консультація</button><br/>
                <button className={"secondaryBtn"}>гортай далі</button>
            </div>
        </div>
    );
};

export default FirstScreen;