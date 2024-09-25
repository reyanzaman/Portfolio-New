"use client"

import React from "react";
import { SparklesCore } from "@/app/component/sparkles";
import { TypewriterEffectSmooth } from "@/app/component/typewriter";
import { FloatingDock } from "@/app/component/dock";
import {
    IconMail,
    IconHome,
    IconPhoto,
    IconTerminal2,
    IconFileSpark,
    IconBrandYoutube,
    IconBrandAdobePhotoshop,
    IconBrandAdobeIllustrator,
    IconBrandAdobePremier,
    IconBrandBlender,
} from "@tabler/icons-react";
import Image from "next/image";
import { Carousel, Card } from "@/app/component/cards-carousel";
import { Compare } from "@/app/component/compare";
import { GlareCard } from "@/app/component/glare-card";
import { HoverEffect } from "@/app/component/hover";

export default function Artist() {

    const words = [
        {
            text: "Let's",
        },
        {
            text: "invent",
        },
        {
            text: "something",
        },
        {
            text: "creative!",
        },
    ];

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Programming",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-300" />
            ),
            href: "/content/developer",
        },
        {
            title: "Gallery",
            icon: (
                <IconPhoto className="h-full w-full text-neutral-300" />
            ),
            href: "/content/gallery",
        },
        {
            title: "Freelancer",
            icon: (
                <Image
                    width={45}
                    height={45}
                    alt="Freelancer"
                    src={"https://res.cloudinary.com/dreac336r/image/upload/v1725816717/Portfolio/freelancer_logo.png"}
                >
                </Image>
            ),
            href: "https://www.freelancer.com/u/reyanzaman",
        },
        {
            title: "Artstation",
            icon: (
                <Image
                    width={45}
                    height={45}
                    alt="Artstation"
                    src={"https://res.cloudinary.com/dreac336r/image/upload/v1725815065/Portfolio/artstation_icon.png"}
                >
                </Image>
            ),
            href: "https://www.artstation.com/reyanzaman",
        },
        {
            title: "Youtube",
            icon: (
                <IconBrandYoutube className="h-full w-full text-neutral-300" />
            ),
            href: "https://www.youtube.com/@ReyanZamanRZ",
        },
        {
            title: "Resume",
            icon: (
                <IconFileSpark className="h-full w-full text-neutral-300" />
            ),
            href: "https://drive.usercontent.google.com/u/0/uc?id=1ckMiBv5IsVxjmFr_eBD5hAJ5BPCDDA4v&export=download",
        },
        {
            title: "Contact",
            icon: (
                <IconMail className="h-full w-full text-neutral-300" />
            ),
            href: "mailto:reyanzaman.rz@gmail.com",
        },
    ];

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="text-center w-full font-[family-name:var(--font-geist-sans)]">
            <div className="lg:h-[25rem] h-[20rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <h1 className="md:text-5xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20">
                    Khandoker Ashik Uz Zaman
                </h1>
                <TypewriterEffectSmooth words={words} />
            </div>

            <div className="fixed lg:w-fit lg:bottom-0 bottom-4 right-4 lg:left-1/2 transform lg:-translate-x-1/2 z-50">
                <FloatingDock
                    items={links}
                />
            </div>

            <div className="h-full w-full p-8 lg:pt-10 pb-12 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]">
                <div className="flex lg:flex-row flex-col justify-center items-center lg:mb-20 mb-12">
                    <div className="flex flex-col">
                        <h1 className="lg:text-2xl text-base p-1">Starting From</h1>
                        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
                            3D modelling & Animations
                        </h2>
                        <h1 className="lg:text-2xl text-base p-2">Created With Top of The Line Tools</h1>
                    </div>
                    <Compare
                        firstImage="https://res.cloudinary.com/dreac336r/image/upload/v1725848903/Portfolio/cologne_cathedral_textured.png"
                        secondImage="https://res.cloudinary.com/dreac336r/image/upload/v1725848904/Portfolio/cologne_cathedral_clay.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[350px] w-[350px] lg:h-[800px] lg:w-[800px]"
                        slideMode="hover"
                    />
                </div>

                <div className="flex lg:flex-row flex-col justify-center items-center lg:mb-20 mb-12">
                    <Compare
                        firstImage="https://res.cloudinary.com/dreac336r/image/upload/v1725849765/Portfolio/cnf_1.png"
                        secondImage="https://res.cloudinary.com/dreac336r/image/upload/v1725849770/Portfolio/cnf_2.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[350px] w-[350px] lg:h-[800px] lg:w-[800px] order-2 lg:order-1"
                        slideMode="hover"
                        autoplay={true}
                    />
                    <div className="flex flex-col pb-8 lg:px-6 order-1 lg:order-2">
                        <h1 className="lg:text-2xl text-base p-1">All The Way To</h1>
                        <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-200 font-sans">
                            Graphics Design & 2D Art
                        </h2>
                        <h1 className="lg:text-2xl text-base p-2">For Advertisement, Games, Promotion & More </h1>
                    </div>
                </div>

                <div className="lg:mb-20 mb-10">
                    <h1 className="lg:text-3xl text-base pb-1">What else do I have to offer?</h1>
                    <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-200 font-sans">
                        Get a glimpse of my works.
                    </h2>
                    <Carousel items={cards} />
                </div>

                <div className="flex flex-col lg:flex-row w-full lg:mb-20 mb-10 mx-auto max-w-[100em]">
                    <div className="p-6 lg:w-1/2 w-full">
                        <iframe
                            width="100%"
                            height="395"
                            src="https://www.youtube.com/embed/-DRIV7YLgtI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="lg:h-[395px] h-[250px]"
                        ></iframe>
                    </div>
                    <div className="p-6 lg:w-1/2 w-full">
                        <iframe
                            width="100%"
                            height="395"
                            src="https://www.youtube.com/embed/yjN7E_URFhg"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="lg:h-[395px] h-[250px]"
                        ></iframe>
                    </div>
                </div>

                <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-200 font-sans">
                    Tools I Use
                </h2>
                <h1 className="lg:text-3xl text-base pt-1">Professional tools helps create high quality products</h1>
                <div className="grid lg:grid-cols-4 grid-cols-1 pt-8 lg:mb-20 mb-10 gap-x-8 gap-y-8 justify-items-center mx-auto max-w-[80em]">
                    <GlareCard className="flex flex-col items-center justify-center">
                        <IconBrandAdobePhotoshop className="text-white scale-150" />
                        <p className="text-white font-bold text-xl mt-4">Photoshop</p>
                    </GlareCard>
                    <GlareCard className="flex flex-col items-center justify-center">
                        <IconBrandAdobeIllustrator className="text-white scale-150" />
                        <p className="text-white font-bold text-xl mt-4">Illustrator</p>
                    </GlareCard>
                    <GlareCard className="flex flex-col items-center justify-center">
                        <IconBrandAdobePremier className="text-white scale-150" />
                        <p className="text-white font-bold text-xl mt-4">Premiere Pro</p>
                    </GlareCard>
                    <GlareCard className="flex flex-col items-center justify-center">
                        <IconBrandBlender className="text-white scale-150" />
                        <p className="text-white font-bold text-xl mt-4">Blender</p>
                    </GlareCard>
                </div>

                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
                    Companies I have worked with
                </h2>
                <h1 className="lg:text-3xl text-base pt-3">Focusing on graphics & animations</h1>
                <div className="max-w-5xl mx-auto px-8 lg:mb-10 mb-1">
                    <HoverEffect items={projects} />
                </div>

            </div>
        </div>
    )
}

const projects = [
    {
        title: "Collectwin",
        description:
            "An augmented-reality merchandise company that creates steel & acrylic plates infused with augmented reality capabilities.",
        link: "https://collectwin.net/",
    },
    {
        title: "Extravision",
        description:
            "A german studio focusing on creating high-quality 3D models and animations for the metaverse.",
        link: "https://www.turbosquid.com/Search/Artists/ExtraVision",
    },
    {
        title: "Naptech Labs",
        description:
            "A multinational technology company that develops games, apps, and software for clients around the world.",
        link: "https://naptechlabs.com/",
    },
    {
        title: "Cheese N Fries",
        description:
            "An online restaurant that focuses on creating delicious and healthy meals for its customers.",
        link: "https://www.facebook.com/cheesenfriesBD/",
    },
    {
        title: "Cafe Anthro",
        description:
            "A coffee shop that focuses on creating a cozy and welcoming environment for its customers.",
        link: "https://www.facebook.com/cafe4Anthro",
    },
    {
        title: "Adex Lighting",
        description:
            "A lighting company that focuses on creating high-quality and energy-efficient lighting solutions for its customers.",
        link: "https://www.facebook.com/adexlighting",
    },
];

const LogoContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Logos are the face of your brand.
                    </span>{" "}
                    It is the first thing that your audience will notice about your brand.
                    A well-designed logo can help you create a strong brand identity and
                    make a lasting impression on your audience. I can help you create a
                    unique and memorable logo that reflects your brand&apos;s values and
                    personality. Below, you will find some of my logo designs that I have
                    created for my clients.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/hyperbridge.jpg"
                    alt="Hyperbridge Logo"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/forex.jpg"
                    alt="Logo"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/kajkey.jpg"
                    alt="Logo"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/metis.jpg"
                    alt="Logo"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const MerchandiseContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Merchandise design is a great way to promote your brand.
                    </span>{" "}
                    It is an effective way to showcase your products and services and
                    attract new customers. I can help you create eye-catching and
                    professional merchandise designs or templates that will help you stand out from
                    the competition. Below, you will find some of the merchandise designs that I have
                    created for my client.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1727224353/Portfolio/nft_img2.png"
                    alt="Merchandise design"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1727224353/Portfolio/nft_img3.png"
                    alt="Merchandise design"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1727224353/Portfolio/nft_img4.png"
                    alt="Merchandise design"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const FlyerContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Brochures & Flyers are a great way to promote your brand.
                    </span>{" "}
                    They are an effective way to showcase your products and services
                    and attract new customers. I can help you create eye-catching and
                    professional brochures and flyers that will help you stand out from
                    the competition. Below, you will find some of the brochures and flyers
                    that I have designed for my clients.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cwin_flyer.jpg"
                    alt="Flyer"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/hw_flyer.jpg"
                    alt="Flyer"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const PosterContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Banners & Posters are a great way to promote your brand.
                    </span>{" "}
                    They are an effective way to showcase your products and services
                    and attract new customers. I can help you create eye-catching and
                    professional banners and posters that will help you stand out from
                    the competition. Below, you will find some of the banners and posters
                    that I have designed for my clients.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cwin_print_banner.jpg"
                    alt="Poster"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cwin_banner.jpg"
                    alt="Poster"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cnc_banner.jpg"
                    alt="Poster"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/mmit_banner.jpg"
                    alt="Poster"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/mmit_drone_banner.jpg"
                    alt="Poster"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const MenuContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Menu & Catalogues are a great way to showcase your products.
                    </span>{" "}
                    They are an effective way to showcase your products and services
                    and attract new customers. I can help you create elegant and
                    professional menus and catalogues that will help you stand out from
                    the competition. Below, you will find some of the menus and catalogues
                    that I have designed for my clients.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/mmss_menu.jpg"
                    alt="Menu"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/hw_catalog.jpg"
                    alt="Menu"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/kings_menu.jpg"
                    alt="Menu"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const SocialMediaContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Social media posts are a great way to promote your brand.
                    </span>{" "}
                    It is a vital part of any marketing strategy and can help you reach
                    a wider audience and increase brand awareness. I can help you create
                    eye-catching and engaging social media posts that will help you connect
                    with your audience and drive engagement. Below, you will find some of
                    the social media posts that I have designed for my clients.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/anthro_sm.jpg"
                    alt="Social Media Content"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/adex_sm.jpg"
                    alt="Social Media Content"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cnf_sm.jpg"
                    alt="Social Media Content"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cwin_sm.jpg"
                    alt="Social Media Content"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const CertificateContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Certificates are a great way to recognize your achievers.
                    </span>{" "}
                    They are an effective way to motivate your employees and show
                    appreciation for their hard work. I can help you create elegant
                    and professional certificates that will help you recognize and
                    reward your achievers.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3mt_cert.jpg"
                    alt="Certificate"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const MockupContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Mockups are a great way to visualize your ideas.
                    </span>{" "}
                    They are an effective way to showcase your products and services
                    and attract new customers. I can help you create eye-catching and
                    professional mockups that will help you stand out from the competition.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cwin_mockup1.jpg"
                    alt="Mockup"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/cwin_mockup2.jpg"
                    alt="Mockup"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/docacola_cap.jpg"
                    alt="Mockup"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/docacola_mug.jpg"
                    alt="Mockup"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const DContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        3D models and animations are a great way to bring your ideas to life.
                    </span>{" "}
                    3D models are used everywhere from movies and video games to product
                    design and architecture. I can help you create high-quality 3D models
                    and animations that will help you visualize your ideas and create
                    stunning visuals. Below, you will find some of the 3D models and
                    animations that I have created for my clients.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3d_1.jpg"
                    alt="3D model"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3d_2.jpg"
                    alt="3D model"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3d_3.jpg"
                    alt="3D model"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3d_4.jpg"
                    alt="3D model"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3d_5.jpg"
                    alt="3D model"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3d_6.jpg"
                    alt="3D model"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725863768/Portfolio/3d_7.jpg"
                    alt="3D model"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const GameContent = () => {
    return (
        <>
            <div
                key={"dummy-content"}
                className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        2D game art is a classic artstyle is which still popular nowadays.
                    </span>{" "}
                    It is a great way to create unique and visually appealing game
                    graphics that will help you create a memorable gaming experience.
                    I can help you create high-quality 2D game art that will help you
                    bring your game to life. Below, you will find some of the 2D game
                    art that I have created for my clients.
                </p>
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725859809/Portfolio/game1.png"
                    alt="Game Contet"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725859809/Portfolio/game2.png"
                    alt="Game Contet"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725859809/Portfolio/game3.png"
                    alt="Game Contet"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
                <Image
                    src="https://res.cloudinary.com/dreac336r/image/upload/v1725859809/Portfolio/game4.png"
                    alt="Game Contet"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
                />
            </div>
        </>
    );
};

const data = [
    {
        category: "Logo/Brand Creation",
        title: "Create your brand identity.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725851497/Portfolio/essentia_logo.png",
        content: <LogoContent />,
    },
    {
        category: "3D Models & Animations",
        title: "Turn your imagination into reality.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725859602/Portfolio/Anubis.png",
        content: <DContent />,
    },
    {
        category: "2D Game Art",
        title: "Design your game with creativity.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725859809/Portfolio/dimness.png",
        content: <GameContent />,
    },
    {
        category: "Social Media Posts",
        title: "Get your brand noticed.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725853129/Portfolio/cnf_social_media.png",
        content: <SocialMediaContent />,
    },
    {
        category: "Banners/Posters",
        title: "Product & service promotion made easy.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725852098/Portfolio/hereway_poster.png",
        content: <PosterContent />,
    },
    {
        category: "Merchandise Templates",
        title: "Create your own merchandise.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1727224353/Portfolio/nft_img1.png",
        content: <MerchandiseContent />,
    },
    {
        category: "Brochures/Flyers",
        title: "Promote your brand with style.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725851840/Portfolio/docacola_brochure.png",
        content: <FlyerContent />,
    },
    {
        category: "Menu/Catalogue",
        title: "Showcase your products with elegance.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725860633/Portfolio/cnf_menu.png",
        content: <MenuContent />,
    },
    {
        category: "Mockups",
        title: "Visualize your ideas with aestehtics.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725853730/Portfolio/docacola_mockup.png",
        content: <MockupContent />,
    },
    {
        category: "Certificate Design",
        title: "Recognize your achievers with style.",
        src: "https://res.cloudinary.com/dreac336r/image/upload/v1725861016/Portfolio/mm_certificate.png",
        content: <CertificateContent />,
    },
];