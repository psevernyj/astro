'use client'
import React from 'react';
import "../styles/map.scss";
import Image from "next/image";
import inst from "@/app/assets/instagram.png";
import tel from "@/app/assets/telegram.png";

import arrow from "../assets/arrow-right.png"
import arrowDown from "../assets/arrow-down.png"
import {openExternalTab} from "@/helpers/openInNewTab";

const Map = () => {
    return (
        <div className={"container map wrapper"} id={"map"}>
            <h2 className={"mapTitle textBold24"}>
                як це буде?
            </h2>
            <div className={"mapPoints"}>
                <div className={"point"}>
                    <p className={"text15"}>
                        обери для себе вид консультації, який на твою думку тобі підходить
                    </p>
                </div>
                <Image src={arrow} alt={"Icon"} width={60}/>
                <div className={"point"}>
                    <p className={"text15"}>
                        ознайомся з описом консультації та її вартістю
                    </p>
                </div>
                <Image src={arrowDown} alt={"Icon"} width={60}/>
                <div className={"point"}>
                    <p className={"text15"}>
                        напиши мені та <br/>
                        вкажи що саме тобі потрібно
                    </p>
                    <div className={"socialMedia"}>
                        <div onClick={openExternalTab("https://www.instagram.com/astro_about_you/")}>
                            <Image src={inst} alt={"Join to my Instagram"} width={20}/>
                        </div>
                        <div onClick={openExternalTab("https://t.me/bogdanavolkovank")}>
                            <Image src={tel} alt={"Join to my Telegram"} width={20}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Map;