import React from "react";
import {whatIfList} from "@/data/whatIfList";
import "../styles/whatIf.scss";

const WhatIf = () => {
    return (
        <div className={"main container whatIf wrapper"}>
            <h2 className={"whatIfTitle textBold48"}>
                що якщо..
            </h2>
            <div className={"content"}>
                {
                    whatIfList.map(card => <div className={"whatICard"} key={card.id}>
                        <p className={"textBold24 title"}>
                            {".." + card.question}
                        </p>
                        <p className={"text16"}>
                            {card.answer}
                        </p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default WhatIf;