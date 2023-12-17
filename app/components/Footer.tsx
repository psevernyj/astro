'use client'
import React from 'react';
import "../styles/footer.scss";
import Image from "next/image";
import inst from "@/app/assets/instagram.png";
import tel from "@/app/assets/telegram.png";
import {openExternalTab} from "@/helpers/openInNewTab";
import {handleScroll} from "@/helpers/handleScroll";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={"footer container wrapper"}>
            <div className={"content"}>
                <div className={"left"}>
                    <p className={"textBold28"}>
                        astro_about_you
                    </p>
                    <p className={"text16"}>
                        Ukraine, Kyiv
                    </p>
                    <p className={"text16"}>
                      _
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
                <div className={"right"}>
                    <ul className={"navigationList"}>
                        <li className={"navigationItem textLight18"} onClick={() => handleScroll("aboutMe", 100)}>
                            це я
                        </li>
                        <li className={"navigationItem textLight18"} onClick={() => handleScroll("whatWillYouGet", 100)}>
                            тобі
                        </li>
                        <li className={"navigationItem textLight18"} onClick={() => handleScroll("typesOfConsultation", 100)}>
                            консультації
                        </li>
                        <li className={"navigationItem textLight18"} onClick={() => handleScroll("map", 100)}>
                            як це буде?
                        </li>
                        <li className={"navigationItem textLight18"} onClick={() => handleScroll("whatIf", 100)}>
                            що якщо..?
                        </li>
                        <li className={"navigationItem textLight18"} onClick={() => handleScroll("cases", 100)}>
                            кейси
                        </li>
                        <li className={"navigationItem textLight18"} onClick={() => handleScroll("faq", 100)}>
                            часті питання
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"incTitle"}>
                <p className={"text13"}>
                    bohdana.volkova Inc. ©︎ {currentYear} All Rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;