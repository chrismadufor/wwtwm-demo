"use client";

import { reset } from "@/redux/features/controlsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router =  useRouter()
  const dispatch = useAppDispatch();
  let prize = useAppSelector((state) => state.controlsReducer.prize);
  const resetGame = () => {
    router.push('')
    dispatch(reset())
  }
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-5xl">You just won <span className="orange font-semibold">₦{prize}</span></p>
      <button
        onClick={resetGame}
        className="orange-bg py-3 px-8 mt-8"
      >
        Back Home
      </button>
    </main>
  );
}
