import React from 'react';
import Link from "next/link";
import "../styles/navbar.scss";
import Image from "next/image";
import logo from "../favicon.ico";

const Navbar = () => {
    return (
        <nav className={"navbar container"}>
            <div className={"logo"}>
                <Link href={"/"}>
                    <Image src={logo} alt={"logo"} width={30}/>
                    astro_about_you
                </Link>
            </div>
            <ul className={"navigationList"}>
                <li className={"navigationItem text15"}>
                    це я
                </li>
                <li className={"navigationItem text15"}>
                    консультації
                </li>
                <li className={"navigationItem text15"}>
                    переваги
                </li>
                <li className={"navigationItem text15"}>
                    що якщо..?
                </li>
                <li className={"navigationItem text15"}>
                    кейси
                </li>
                <li className={"navigationItem text15"}>
                    відповіді
                </li>
                <li className={"navigationItem"}>
                    <button className={"primaryBtn"}>записатись</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;