import React from 'react';
import "../styles/map.scss";
import Image from "next/image";
import inst from "@/app/assets/instagram.png";
import tel from "@/app/assets/telegram.png";

import arrow from "../assets/arrow-right.png"
import arrowDown from "../assets/arrow-down.png"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon1 from "../assets/icon1.svg"

const Map = () => {
    return (
        <div className={"container map wrapper"}>
            <h2 className={"mapTitle textBold24"}>
                як це буде?
            </h2>
            <div className={"mapPoints"}>
                <div className={"point"}>
                    {/*<Image src={icon1} alt={"Icon"} width={60}/>*/}
                    <p className={"text15"}>
                        обери для себе вид консультації, який на твою думку тобі підходить
                    </p>
                </div>
                <Image src={arrow} alt={"Icon"} width={60}/>
                <div className={"point"}>
                    {/*<Image src={icon2} alt={"Icon"} width={60}/>*/}
                    <p className={"text15"}>
                        ознайомся з описом консультації та її вартістю
                    </p>
                </div>
                <Image src={arrowDown} alt={"Icon"} width={60}/>
                <div className={"point"}>
                    {/*<Image src={icon3} alt={"Icon"} width={60}/>*/}
                    <p className={"text15"}>
                        напиши мені та <br/>
                        вкажи що саме тобі потрібно
                    </p>
                    <div className={"socialMedia"}>
                        <Image src={inst} alt={"Join to my Instagram"} width={20}/>
                        <Image src={tel} alt={"Join to my Telegram"} width={20}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Map;