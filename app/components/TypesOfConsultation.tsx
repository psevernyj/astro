'use client'
import React from 'react';
import {consultationList} from "@/data/consultationList";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import parse from 'html-react-parser';
import "../styles/typesOfConsultation.scss";
import quote from "../assets/heart.svg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
const TypesOfConsultation = () => {
    return (
            <div className={"typesOfConsultation wrapper"} id={"typesOfConsultation"}>
                <h2 className={"textBold48"}>
                    види консультацій
                </h2>
                <div className={"cards"}>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            consultationList.map(block =>
                                <SwiperSlide key={block.id}>
                                    <div className={"card"} key={block.id}>
                                        <p className={"priceTitle textBold48"}>
                                            {block.price}
                                        </p>
                                        <div className={"content"}>
                                            <div className={"header"}>
                                                <h3 className={"blockTitle textBold24"}>
                                                    {block.title}
                                                </h3>
                                                <div className={"price"}>
                                                    <p className={"hint text13"}>
                                                        {block.hint}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={"body"}>
                                                <div className={"benefits text16"}>
                                                    {parse(block.benefits)}
                                                </div>
                                                <div className={"description text16"}>
                                                    <Image className={"quoteIcon"} src={quote} alt={"icon"}/>
                                                    {block.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
    );
};

export default TypesOfConsultation;