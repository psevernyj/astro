import React from "react";
import "../styles/cases.scss";
import {caseList} from "@/data/caseList";
import Image from "next/image";

const Cases = () => {
    return (
        <div className={"main container cases wrapper"}>
            <h2 className={"tagTitle textBold24"}>
                #кейси
            </h2>
            <div className={"content"}>
                {
                    caseList.map(card => <div className={"caseCard"} key={card.id}>
                            <Image className={"cardImg"} src={card.img} alt={card.tag}/>
                            <div className={"textContent"}>
                                <p className={"text24 title"}>
                                    #{card.tag}
                                </p>
                                <p className={"text14"}>
                                    {card.points}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cases;