'use client';

import Image from "next/image";

export default function Home() {
    return (
        <div
            className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Image
                    src="/logo.png"
                    alt="Voidrealms logo"
                    width={180}
                    height={38}
                    priority
                />
                <h1 className="text-3xl">Voidrealms Will Return</h1>
                <div>
                    <p>I recently acquired the domain and approval to continue development of Voidrealms.</p>
                    <br/>
                    <p className="font-bold">Please join our community server for more information.</p>
                </div>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="https://discord.gg/tQ8S7Mn6xb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/discord.svg"
                            alt="Discord logo"
                            width={20}
                            height={20}
                        />
                        Community Server
                    </a>
                </div>
            </main>
        </div>
    );
}
