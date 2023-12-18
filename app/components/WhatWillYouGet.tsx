import React from 'react';
import {whatWillYouGetList} from "@/data/whatWillYouGetList";
import "../styles/whatWillYouGet.scss";

const WhatWillYouGet = () => {
    return (
        <div className={"container whatWillYouGet"} id={"whatWillYouGet"}>
            <h2 className={"textBold48"}>
                що ти отримаєш
            </h2>
            <div className={"content"}>
                {
                    whatWillYouGetList.map(block =>  <div className={"block"} key={block.id}>
                        <h3 className={"blockTitle textBold24"}>
                            {block.title}
                        </h3>
                        <p className={"text16"}>
                            {block.description}
                        </p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default WhatWillYouGet;