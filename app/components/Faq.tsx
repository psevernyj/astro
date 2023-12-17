'use client'
import React, {useState} from "react";
import {faqList} from "@/data/faqList";
import "../styles/faq.scss";
import Image from "next/image";
import arrow from "../assets/arrow.png";

const Faq = () => {
    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        if (expandedItems.includes(index)) {
            setExpandedItems(expandedItems.filter(itemIndex => itemIndex !== index));
        } else {
            setExpandedItems([...expandedItems, index]);
        }
    };

    return (
        <div className={"faq wrapper container"} id={"faq"}>
            <h2 className={"textBold48"}>FAQ</h2>
            <div className={"content"}>
                {faqList.map((question, index) =>
                    <div className="accordion" key={question.id}>
                        <div
                            className={`accordionHeader text15 ${expandedItems.includes(index) ? 'open' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {question.question}
                            <Image className={"arrow"} src={arrow} alt={"arrow icon"}/>
                        </div>
                        {expandedItems.includes(index) && (
                            <div className="accordionContent text16">{question.answer}</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Faq;
