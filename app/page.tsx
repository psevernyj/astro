import FirstScreen from "@/app/components/FirstScreen";
import "./styles/global.scss";
import AboutMe from "@/app/components/AboutMe";
import WhatWillYouGet from "@/app/components/WhatWillYouGet";
import TypesOfConsultation from "@/app/components/TypesOfConsultation";
import WhatIf from "@/app/components/WhatIf";
import Cases from "@/app/components/Cases";
import Faq from "@/app/components/Faq";
import Map from "@/app/components/Map";

export default function Home() {
    return <div className={"homePage"}>
        <FirstScreen/>
        <AboutMe/>
        <WhatWillYouGet/>
        <TypesOfConsultation/>
        <Map/>
        <WhatIf/>
        <Cases/>
        <Faq/>
    </div>
}
