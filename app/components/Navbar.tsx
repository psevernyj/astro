'use client'
import React from 'react';
import Link from "next/link";
import "../styles/navbar.scss";
import Image from "next/image";
import logo from "../favicon.ico";
import {handleScroll} from "@/helpers/handleScroll";
import {openExternalTab, openInNewTab} from "@/helpers/openInNewTab";

const Navbar = () => {
    return (
        <div className={"navbarWrapper"}>
            <nav className={"navbar container"}>
                <div className={"logo"}>
                    <Link href={"/"}>
                        <Image src={logo} alt={"logo"} width={30}/>
                        astro_about_you
                    </Link>
                </div>
                <ul className={"navigationList"}>
                    <li className={"navigationItem text15"} onClick={() => handleScroll("aboutMe", 100)}>
                        це я
                    </li>
                    <li className={"navigationItem text15"} onClick={() => handleScroll("whatWillYouGet", 100)}>
                        тобі
                    </li>
                    <li className={"navigationItem text15"} onClick={() => handleScroll("typesOfConsultation", 100)}>
                        консультації
                    </li>
                    <li className={"navigationItem text15"} onClick={() => handleScroll("map", 100)}>
                        як це буде?
                    </li>
                    <li className={"navigationItem text15"} onClick={() => handleScroll("whatIf", 100)}>
                        що якщо..?
                    </li>
                    <li className={"navigationItem text15"} onClick={() => handleScroll("cases", 100)}>
                        кейси
                    </li>
                    <li className={"navigationItem text15"} onClick={() => handleScroll("faq", 100)}>
                        часті питання
                    </li>
                </ul>
                <button className={"primaryBtn"} onClick={openExternalTab("https://t.me/bogdanavolkovank")}>
                    записатись
                </button>
            </nav>
        </div>
    );
};

export default Navbar;