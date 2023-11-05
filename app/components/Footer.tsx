import React from 'react';
import "../styles/footer.scss";
import Image from "next/image";
import inst from "@/app/assets/instagram.png";
import tel from "@/app/assets/telegram.png";

const Footer = () => {
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
                        <Image src={inst} alt={"Join to my Instagram"} width={20}/>
                        <Image src={tel} alt={"Join to my Telegram"} width={20}/>
                    </div>
                </div>
                <div className={"right"}>
                    <ul className={"navigationList"}>
                        <li className={"navigationItem textLight18"}>
                            це я
                        </li>
                        <li className={"navigationItem textLight18"}>
                            консультації
                        </li>
                        <li className={"navigationItem textLight18"}>
                            переваги
                        </li>
                        <li className={"navigationItem textLight18"}>
                            що якщо..?
                        </li>
                        <li className={"navigationItem textLight18"}>
                            кейси
                        </li>
                        <li className={"navigationItem textLight18"}>
                            відповіді
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"incTitle"}>
                <p className={"text13"}>
                    ©︎ 2023 bohdana.volkova Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;