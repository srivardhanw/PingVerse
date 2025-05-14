import { SignedOut, SignInButton } from "@clerk/nextjs";
import DummyChat from "./DummyChat"
import Link from "next/link";
import { LuMessageCircle } from "react-icons/lu";

const Hero = () => {
    return (
        <section id="hero" className="pt-30">
            <div className='grid grid-cols-12 mx-8'>
                <div className='text-start col-span-12 md:col-span-4'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5'>
                        Connect instantly with <strong className="text-gradient">PingVerse</strong>
                    </h1>
                    <br />
                    <p className="text-lg">Experience real-time messaging like never before with PingVerse. Connect with friends, teams, and communities in one seamless platform.</p>
                    <div className="flex justify-around text-center">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="mt-5 border-1 py-4 px-5 bg-purple-600 hover:opacity-75 text-white rounded-4xl transition-hover duration-400 ease-out">Get Started Free</button>
                            </SignInButton>
                        </SignedOut>
                        {/* temporary */}
                        <Link href="/chat" prefetch={false}>
                            <button className="mt-5 border-1 py-4 px-5 bg-transparent hover:opacity-75 text-black rounded-4xl transition-hover duration-400 ease-out ml-5"><LuMessageCircle className="inline self-center" />
                                See it in Action
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-20 col-span-12 relative md:block md:col-start-7 md:col-span-6 m-auto ">
                    <DummyChat />
                </div>
            </div>
        </section>
    )
}

export default Hero