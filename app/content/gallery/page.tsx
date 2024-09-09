"use client"

import React from "react";
import {
    IconMail,
    IconHome,
    IconPhoto,
    IconTerminal2,
    IconFileSpark,
    IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import { FloatingDock } from "@/app/component/dock";

export default function Gallery() {

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Programming",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/content/developer",
        },
        {
            title: "Gallery",
            icon: (
                <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />
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
                <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.youtube.com/@ReyanZamanRZ",
        },
        {
            title: "Resume",
            icon: (
                <IconFileSpark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://drive.usercontent.google.com/u/0/uc?id=1ckMiBv5IsVxjmFr_eBD5hAJ5BPCDDA4v&export=download",
        },
        {
            title: "Contact",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "mailto:reyanzaman.rz@gmail.com",
        },
    ];

    return (
        <div className="text-center w-full h-screen flex items-center justify-center">
            <div className="text-6xl">COMING SOON!</div>
            <div className="fixed lg:w-fit lg:bottom-0 bottom-4 right-4 lg:left-1/2 transform lg:-translate-x-1/2 z-50">
                <FloatingDock items={links} />
            </div>
        </div>
    )
}