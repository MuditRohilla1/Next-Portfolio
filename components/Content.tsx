"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Frontend } from "@/Data";
import { Programming } from "@/Data";
import { backend } from "@/Data";

const ThreeDCardDemo = () => {
    return (
        <div id="skills">

            <div  className="py-10 w-full">
                <div>
                    <h1 className="heading">
                        Programming <span className="text-purple"> Skills</span>
                    </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-4">
                    {Programming.map((skill) => (
                        <CardContainer
                            key={skill.id}
                            className="inter-var flex md:max-w-60 max-w-32 gap-2 hover:shadow-xl rounded-xl"
                        >
                            <CardBody
                                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-2 border"
                            >
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white m-auto"
                                >
                                    {skill.title}
                                </CardItem>
                                <CardItem
                                    translateZ="150"
                                    rotateX={25}
                                    rotateZ={-10}
                                    className="w-full"
                                >
                                    <Image
                                        src={skill.img}
                                        height="500"
                                        width="500"
                                        className="h-40 w-40 object-contain rounded-xl group-hover/card:shadow-xl"
                                        alt={skill.title}
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>

            <div className="py-10 w-full">
                <div>
                    <h1 className="heading">
                        Front-End <span className="text-purple"> Skills</span>
                    </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-4">
                    {Frontend.map((skill) => (
                        <CardContainer
                            key={skill.id}
                            className="inter-var flex md:max-w-60 max-w-32 gap-2 hover:shadow-xl rounded-xl"
                        >
                            <CardBody
                                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-2 border"
                            >
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white m-auto"
                                >
                                    {skill.title}
                                </CardItem>
                                <CardItem
                                    translateZ="150"
                                    rotateX={25}
                                    rotateZ={-10}
                                    className="w-full"
                                >
                                    <Image
                                        src={skill.img}
                                        height="500"
                                        width="500"
                                        className="h-40 w-40 object-contain rounded-xl group-hover/card:shadow-xl"
                                        alt={skill.title}
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>


            <div className="py-10 w-full">
                <div>
                    <h1 className="heading">
                        Back-End<span className="text-purple"> Skills</span>
                    </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-4">
                    {backend.map((skill) => (
                        <CardContainer
                            key={skill.id}
                            className="inter-var flex md:max-w-60 max-w-32 gap-2 hover:shadow-xl rounded-xl"
                        >
                            <CardBody
                                className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-2 border"
                            >
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white m-auto"
                                >
                                    {skill.title}
                                </CardItem>
                                <CardItem
                                    translateZ="150"
                                    rotateX={25}
                                    rotateZ={-10}
                                    className="w-full"
                                >
                                    <Image
                                        src={skill.img}
                                        height="500"
                                        width="500"
                                        className="h-40 w-40 object-contain rounded-xl group-hover/card:shadow-xl"
                                        alt={skill.title}
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default ThreeDCardDemo;
