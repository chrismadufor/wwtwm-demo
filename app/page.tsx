import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="relative overflow-hidden h-screen w-full flex flex-col items-center justify-center bg-blue-800 px-5">
        <p className="text-3xl xl:text-5xl text-center">Who Wants To Win Some Money?</p>
        <Link href="/question">
          <button className="orange-bg py-3 px-8 mt-8">Start Game</button>
        </Link>
        <p className="absolute bottom-0 w-full text-center text-white italic">*Best viewed on a large screen</p>
      </div>
    </main>
  );
}
