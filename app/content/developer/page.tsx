"use client"

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/app/component/dock";
import {
    IconBrandGithub,
    IconMail,
    IconHome,
    IconBrush,
    IconFileSpark,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandPython,
    IconBrandTailwind,
    IconBrandTypescript,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/app/component/beams";
import { Compare } from "@/app/component/compare";
import { TracingBeam } from "@/app/component/tracing-beam";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { HoverEffect } from "@/app/component/hover";

export default function Developer() {

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Graphics",
            icon: (
                <IconBrush className="h-full w-full text-neutral-300" />
            ),
            href: "/content/artist",
        },
        {
            title: "Github",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Resume",
            icon: (
                <IconFileSpark className="h-full w-full text-neutral-300" />
            ),
            href: "https://drive.usercontent.google.com/u/0/uc?id=19x-uLY7773jbdZ9ZqjrVffFbT1J7o9C8&export=download",
        },
        {
            title: "Contact",
            icon: (
                <IconMail className="h-full w-full text-neutral-300" />
            ),
            href: "mailto:reyanzaman.rz@gmail.com",
        },
    ];

    const [experience, setExperience] = useState(0);
    const [commits, setCommits] = useState(0);
    const [projects, setProjects] = useState(0);
    const easeOutCubic = (t: number) => (--t) * t * t + 1;

    // Count-up effect
    useEffect(() => {
        const duration = 2000; // total duration of count-up in ms
        const frameRate = 30; // number of updates per second
        const steps = duration / frameRate;

        const countUp = (setValue: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: number): void; }, targetValue: number) => {
            let currentStep = 0;

            const interval = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                setValue(Math.floor(targetValue * easeOutCubic(progress)));

                if (currentStep >= steps) {
                    clearInterval(interval);
                    setValue(targetValue); // Ensure the final value is exactly the target
                }
            }, duration / steps);
        };

        countUp(setExperience, 3);
        countUp(setCommits, 450);
        countUp(setProjects, 10);

    }, []);

    return (
        <div>
            <div className="fixed lg:w-fit lg:bottom-0 bottom-4 right-4 lg:left-1/2 transform lg:-translate-x-1/2 z-50">
                <FloatingDock items={links} />
            </div>

            <div className="lg:h-[40rem] h-[25rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-5xl mx-auto p-4">
                    <h1 className="relative z-10 text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                        Khandoker Ashik Uz Zaman
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 lg:max-w-4xl max-w-[300px] mx-auto my-2 lg:text-lg text-sm text-center relative z-10">
                        I like to focus primarily on Next.js and Tailwind CSS for Web Development
                        along with Python for Artificial Intelligence & Machine Learning.
                    </p>
                </div>

                <div className="grid grid-cols-3 mt-20 pt-6 gap-y-6">
                    <div className="flex flex-row items-center justify-items-center justify-center">
                        <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                            {Math.floor(experience)}
                        </h1>
                        <p className="text-neutral-500 md:text-lg text-[10px] relative z-10 w-1/2 lg:px-3 px-2 pt-1">Year of Experience</p>
                    </div>
                    <div className="flex flex-row items-center justify-items-center justify-center">
                        <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                            {Math.floor(commits)}+
                        </h1>
                        <p className="text-neutral-500 md:text-lg text-[10px] relative z-10 w-1/2 lg:px-3 px-1 pt-1">Github Commits</p>
                    </div>
                    <div className="flex flex-row items-center justify-items-center justify-center">
                        <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                            {Math.floor(projects)}+
                        </h1>
                        <p className="text-neutral-500 md:text-lg text-[10px] relative z-10 w-1/2 lg:px-3 px-1 pt-1">Projects Completed</p>
                    </div>
                </div>

                <BackgroundBeams />
            </div>

            <div className="h-full w-full p-8 lg:pt-10 pt-10 pb-12 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]">

                <div className="mx-auto w-full flex items-center justify-center lg:pb-20 pb-0 lg:mt-0 mt-10">
                    <div className="w-3/4 min-h-[75vh] max-h-[85vh] h-[90vh] px-1 md:px-8 flex flex-col text-center items-center justify-center [perspective:800px] [transform-style:preserve-3d]">

                        <div className="lg:pb-20 lg:pt-20 pb-16 pt-0">
                            <h1 className="lg:text-4xl text-base font-semibold text-white">
                                Llama-3 A.I Powered Application <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Palta Question
                                </span>
                                <div className="lg:text-xl text-base pt-3 text-neutral-600">Version 1 & Version 2</div>
                            </h1>
                        </div>

                        <div
                            style={{
                                transform: "rotateX(15deg) translateZ(80px)",
                            }}
                            className="hidden md:block p-1 md:p-4 border rounded-3xl bg-neutral-900 border-neutral-8000 mx-auto w-[85%] h-[55rem]"
                        >
                            <Compare
                                firstImage="https://res.cloudinary.com/dreac336r/image/upload/v1725894484/Portfolio/paltaQv1.png"
                                secondImage="https://res.cloudinary.com/dreac336r/image/upload/v1725894069/Portfolio/paltaQv2.jpg"
                                firstImageClassName="object-cover object-left-top w-full"
                                secondImageClassname="object-cover object-left-top w-full"
                                className="w-full h-full rounded-[22px] md:rounded-lg"
                                slideMode="hover"
                                autoplay={true}
                            />
                        </div>
                        <div
                            style={{
                                transform: "rotateX(15deg) translateZ(80px)",
                            }}
                            className="block md:hidden p-1 md:p-4 border rounded-3xl bg-neutral-900 border-neutral-8000 mx-auto w-[15rem] h-[28rem]"
                        >
                            <Compare
                                firstImage="https://res.cloudinary.com/dreac336r/image/upload/v1725894484/Portfolio/pqv1.png"
                                secondImage="https://res.cloudinary.com/dreac336r/image/upload/v1725894069/Portfolio/pqv2.jpg"
                                firstImageClassName="object-cover object-left-top w-full"
                                secondImageClassname="object-cover object-left-top w-full"
                                className="w-full h-full rounded-[22px] md:rounded-lg"
                                slideMode="hover"
                                autoplay={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:pb-20 lg:pt-20 pb-20 pt-20  text-center">
                    <h1 className="lg:text-2xl text-base font-semibold text-white">
                        <span className="lg:block hidden">An unique blend of Data, Art & Artificial Intelligence</span> <br />
                        <span className="text-4xl md:text-[6.3rem] font-bold mt-1 leading-none">
                            Data Canvas
                        </span>
                        <div className="lg:text-xl text-base pt-3 text-neutral-600">Presented at Facialescape Art Exhibition</div>
                    </h1>
                </div>
                <div className="flex items-center justify-center lg:pb-20 pb-10">
                    <Compare
                        firstImage="https://res.cloudinary.com/dreac336r/image/upload/v1725900176/Portfolio/dc2.png"
                        secondImage="https://res.cloudinary.com/dreac336r/image/upload/v1725848904/Portfolio/dc1.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[350px] w-[350px] lg:h-[800px] lg:w-[800px]"
                        slideMode="hover"
                    />
                </div>

                <TracingBeam className="lg:pt-0 pt-8 lg:px-6 px-10">
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                        {Content.map((item, index) => (
                            <div key={`content-${index}`} className="mb-10">
                                <h2 className="bg-indigo-700 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                    {item.badge}
                                </h2>

                                <p className={twMerge("text-xl mb-4")}>
                                    {item.title}
                                </p>

                                <div className="text-sm  prose prose-sm prose-invert">
                                    {item?.image && (
                                        <Image
                                            src={item.image}
                                            alt="blog thumbnail"
                                            height="1000"
                                            width="1000"
                                            className="rounded-lg mb-10 object-cover"
                                        />
                                    )}
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </TracingBeam>
            </div>
            <div>
                <h2 className="text-center lg:text-4xl text-2xl font-bold pb-12 pt-20">Tech Stacks I Use Frequently</h2>
                <div className="grid grid-cols-5 lg:pb-20 pb-10 flex flex-row items-center justify-items-center max-w-3xl lg:w-1/2 lg:px-0 px-6 mx-auto">
                    <div className="flex flex-col items-center">
                        <IconBrandNextjs className="lg:h-12 lg:w-12 h-8 w-8 text-white" />
                        <p>Next JS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <IconBrandReact className="lg:h-12 lg:w-12 h-8 w-8 text-white" />
                        <p>React JS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <IconBrandPython className="lg:h-12 lg:w-12 h-8 w-8 text-white" />
                        <p>Python</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <IconBrandTailwind className="lg:h-12 lg:w-12 h-8 w-8 text-white" />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <IconBrandTypescript className="lg:h-12 lg:w-12 h-8 w-8 text-white" />
                        <p>Typescript</p>
                    </div>
                </div>
            </div>

            <div className="text-center lg:pt-20 pt-10 pb-10">
                <h2 className="max-w-7xl pl-4 mx-auto text-lg md:text-5xl font-bold text-neutral-200 font-sans">
                    Companies & Institutions I have worked with
                </h2>
                <h1 className="lg:text-3xl text-sm pt-3">Focusing on A.I, Research & Web Development</h1>
                <div className="max-w-5xl mx-auto px-8 lg:mb-10 mb-1">
                    <HoverEffect items={companies} />
                </div>
            </div>

        </div>
    )
}

const companies = [
    {
        title: "South-East University",
        description:
            "A private university in Bangladesh where I worked with the Vice Chancellor on various projects.",
        link: "https://collectwin.net/",
    },
    {
        title: "Independent University, Bangladesh",
        description:
            "A private university in Bangladesh where I worked with the Center for Computational & Data Sciences Lab on research projects.",
        link: "https://www.turbosquid.com/Search/Artists/ExtraVision",
    },
    {
        title: "Dhaka University",
        description:
            "A public university in Bangladesh where I worked with the Data & Design Lab on various projects.",
        link: "https://naptechlabs.com/",
    },
];

const Content = [
    {
        title: "Bus Management System",
        description: (
            <>
                <p className="text-justify text-base">
                    This website is a bus management system that allows users to book bus
                    tickets online. It has a user-friendly interface that allows users to
                    easily book tickets, view bus schedules, and manage their bookings and
                    track buses in real-time.
                </p>
            </>
        ),
        badge: "UI/UX",
        image:
            "https://res.cloudinary.com/dreac336r/image/upload/v1725894069/Portfolio/iubbms.png",
    },
    {
        title: "Oitijjo",
        description: (
            <>
                <p className="text-justify text-base">
                    This website focuses on the culture and heritage of Bangladesh. It
                    provides a platform for local artisans to showcase their work and sell
                    their products. It is a multi vendor e-commerce platform with integrated
                    3D model viewing capabilities for enhanced customer experience.
                </p>
            </>
        ),
        badge: "React",
        image:
            "https://res.cloudinary.com/dreac336r/image/upload/v1725894069/Portfolio/oitijjo.png",
    },
    {
        title: "PDF-GPT Chatbot",
        description: (
            <>
                <p className="text-justify text-base">
                    This project is an extention to the GPT-3 chatbot that allows users to
                    upload Bangla PDF files and ask questions in Bangla. The chatbot uses GPT-3
                    to extract information from the PDF and provide answers to the user&apos;s
                    questions in both Bangla and English language.
                </p>
            </>
        ),
        badge: "Next JS",
        image:
            "https://res.cloudinary.com/dreac336r/image/upload/v1725894069/Portfolio/pdfchatbot.png",
    },
    {
        title: "Liberation War Museum Smart Learning Platform (Demo)",
        description: (
            <>
                <p className="text-justify text-base">
                    This project is a smart learning platform that allows children to learn
                    about the history of Bangladesh&apos;s liberation war in an interactive
                    way. It includes games, quizzes, and interactive lessons to engage
                    children and help them learn about the history of Bangladesh.
                </p>
            </>
        ),
        badge: "UI/UX",
        image:
            "https://res.cloudinary.com/dreac336r/image/upload/v1725894069/Portfolio/lwm-demo.png",
    },
    {
        title: "QuBAN Question Classifier",
        description: (
            <>
                <p className="text-justify text-base">
                    This project uses Naive-Bayes algorithm to classifier between
                    questions and non-questions. It is a simple text classifier that
                    uses the Bag of Words model to classify questions based on the
                    words used in the text.
                </p>
            </>
        ),
        badge: "Python",
        image:
            "https://res.cloudinary.com/dreac336r/image/upload/v1725894069/Portfolio/classifier.png",
    },
];