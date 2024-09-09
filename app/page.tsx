import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">

      <main className="p-8 lg:pt-10 pb-12 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]">

        <div className="lg:pb-16 pb-10">
          <h1 className="lg:text-6xl text-3xl text-center">Welcome to my portfolio</h1>
          <h2 className="lg:text-2xl text-xl text-center lg:pt-4 pt-2">Pick your poison!</h2>
        </div>

        <div className="relative flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-6 w-full h-full">
          {/* Card 1 */}
          <Link href="/content/developer" className="w-full h-full">
            <div className="w-full h-full lg:pl-12">
              <div className={cn(
                "group w-full cursor-pointer overflow-hidden relative card lg:h-[45rem] h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-neutral-800",
                "bg-[url(https://res.cloudinary.com/dreac336r/image/upload/v1725794319/Portfolio/coding_image.jpg)] bg-cover",
                "before:bg-[url(https://res.cloudinary.com/dreac336r/image/upload/v1725796817/Portfolio/coding_gif.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                "hover:bg-[url(https://res.cloudinary.com/dreac336r/image/upload/v1725796817/Portfolio/coding_gif.gif)]",
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-15",
                "transition-all duration-500"
              )}>
                <div className="text relative z-50">
                  <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                    Coding & Development
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4 lg:block hidden">
                    I like to focus primarily on Next.js and Tailwind CSS for Web Development
                    along with Python for Artificial Intelligence & Machine Learning.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Logo */}
          <div className="absolute z-50 mx-auto top-1/2 transform -translate-y-1/2 lg:left-1/2 lg:translate-x-[-50%]">
            <div className="rounded-full border-4 border-gray-700 bg-gray-100 flex justify-center items-center shadow-lg shadow-cyan-500/50">
              <Image src="https://res.cloudinary.com/dreac336r/image/upload/v1725802128/Portfolio/rz_logo.png"
                alt="Logo"
                width={130}
                height={130}
                className="translate-y-2 -translate-x-1 scale-110 hover:rotate-[20deg] transition-all duration-[3000ms] lg:block hidden"
              />
            </div>
          </div>

          {/* Card 2 */}
          <Link href="/content/artist" className="w-full h-full">
            <div className="w-full h-full lg:pr-12">
              <div className={cn(
                "group w-full cursor-pointer overflow-hidden relative card lg:h-[45rem] h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-neutral-800",
                "bg-[url(https://res.cloudinary.com/dreac336r/image/upload/v1725801541/Portfolio/design_image.jpg)] bg-cover",
                "before:bg-[url(https://res.cloudinary.com/dreac336r/image/upload/v1725801378/Portfolio/design_gif.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                "hover:bg-[url(https://res.cloudinary.com/dreac336r/image/upload/v1725801378/Portfolio/design_gif.gif)]",
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-15",
                "transition-all duration-500"
              )}>
                <div className="text relative z-50">
                  <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                    Art & Animations
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4 lg:block hidden">
                    I do a variety of work ranging from 2D graphics design to 3D animations.
                    Logos, brochures, 3D models, animations, you name it!
                  </p>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </main>

      <footer>
        <p className="text-center text-neutral-400 font-light text-sm">&copy; Khandoker Ashik Uz Zaman</p>
      </footer>

    </div>
  );
}
