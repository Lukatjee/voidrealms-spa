import Image from "next/image";

export default function Home() {
    return (
        <div
            className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-2xl sm:items-start">
                <Image
                    src="/logo.png"
                    alt="Voidrealms logo"
                    width={180}
                    height={38}
                    priority
                />
                <h1 className="text-3xl">🚀 Voidrealms Will Return</h1>
                <div>
                    <p>We&#39;re building something big — and this is just the start. Over the coming weeks, we&#39;ll be
                        developing a brand-new MMO-survival hybrid gamemode for Void Realms, inspired by games like
                        World of Warcraft but tailored for the creative freedom Minecraft allows.</p>
                    <br/>
                    <p>Our first focus is a dynamic, modular dungeon system designed for endless replayability and
                        adventure. This will form the foundation of our alpha release — and it&#39;s only the
                        beginning.</p>
                    <br/>
                    <p>Plans may shift as we go, but one thing’s certain: the journey is going to be exciting. Stay
                        tuned.</p>
                    <br/>
                    <p className="font-bold"></p>
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
                </div>
            </main>
        </div>
    );
}
