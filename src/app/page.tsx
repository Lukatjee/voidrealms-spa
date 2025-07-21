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
                <h1 className="text-3xl">🚀 Voidrealms Will Return</h1>
                <div>
                    <p>This page is still pretty empty for now, but be sure to mark <b>August 1st</b> on your calendar.</p>
                    <br/>
                    <p className="font-bold">We will not disappoint. 😉</p>
                </div>
            </main>
        </div>
    );
}
