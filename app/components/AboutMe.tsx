'use client'
import Image from "next/image";
import photo from "../assets/port2.jpeg";
import photoMob from "../assets/port2mobile.jpg";
import inst from "../assets/instagram.png";
import tel from "../assets/telegram.png";
import React from "react";
import "../styles/aboutMe.scss";
import {openExternalTab} from "@/helpers/openInNewTab";

const AboutMe = () => {
    return (
        <div className={"container aboutMe wrapper"}  id="aboutMe">
            <div className={"content"}>
                <div className={"text"}>
                    <h2 className={"textBold48"}>
                        це я
                    </h2>
                    <div className={"text18"}>
                        <p>
                            Вітаю тебе у моєму просторі! Я - Богдана:)
                        </p>
                        <p>
                            Не називаю себе гуру чи
                            наставником! Мій Асцендент у Водолії вимагає нових прогресивних поглядів тож тут в нас з
                            тобою -
                            ком`юніті рівних однодумців. Я - Рак по Сонцю, тож тобі зі мною буде затишно, як вдома на
                            кухні)) я
                            точно розумію твій біль і відчуваю твої потреби, тож якщо ти вже тут - я ментально тебе
                            обіймаю❤️
                        </p>
                        <p>
                            Астрологія в моєму житті з`явилась 3 роки тому, тож я маю достатньо практичного досвіду, щоб
                            відповісти тобі на хвилюючі питання. Я звісно не маю дару яснобачення, не наводжу порчі і не
                            роблю
                            привороти але &quot;наврочити&quot; можу😂
                        </p>
                        <p>
                            Астрологія - лише частина мого життя!
                            Решту часу - пізнаю себе та вчусь жити тут і зараз, проживаючи кожну емоцію (а вони не
                            завжди
                            лише
                            позитивні)
                            Співаю (сусідам ніби подобається😅), дитяча мрія одного разу завоювати велику сцену і досі в
                            мені
                            живе🤪
                            Обожнюю коней, агресивний спорт та смачно їсти!
                            Важлива складова мого життя - люди, бо моя філософія проста, щоб зрозуміти себе - зрозумій
                            іншого!
                        </p>
                        <p>
                            Духовність - мій пріорітет, бо рахую, що усе земне - це круто, але має бути щось більше..
                            щось глибоке в житті кожного з нас..
                        </p>
                    </div>
                    <div className={"socialMedia"}>
                        <div onClick={openExternalTab("https://www.instagram.com/astro_about_you/")}>
                            <Image src={inst} alt={"Join to my Instagram"} width={20}/>
                        </div>
                        <div onClick={openExternalTab("https://t.me/bogdanavolkovank")}>
                            <Image src={tel} alt={"Join to my Telegram"} width={20}/>
                        </div>
                    </div>
                </div>
                <Image className={"portrait"} src={photo} alt={"Bohdana"}/>
                <Image className={"portraitMob"} src={photoMob} alt={"Bohdana"}/>
            </div>
        </div>
    );
};

export default AboutMe;