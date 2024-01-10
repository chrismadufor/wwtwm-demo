"use client"

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { lockUserOption } from "@/redux/features/controlsSlice";

type Props = {
  idx: number;
  letter: string;
  value: string;
  answer: string;
  nextBest: string;
  onSelect: any;
};

export default function Option({ idx, letter, value, answer, nextBest, onSelect }: Props) {
  const dispatch = useAppDispatch()

  const selectedOption = useAppSelector(state => state.controlsReducer.selectedOption)
  const showOptions = useAppSelector(state => state.controlsReducer.showOptions)
  const showAnswer = useAppSelector(state => state.controlsReducer.showAnswer)
  const fiftyFiftyActive = useAppSelector((state) => state.controlsReducer.fiftyFiftyActive)

  const [isClicked, setIsClicked] = useState(selectedOption === letter)
  const [isAnswer, setIsAnswer] = useState(false)
  const [isWrong, setIsWrong] = useState(false)

  useEffect(() => {
    if (selectedOption === letter) setIsClicked(true)
    else setIsClicked(false)
    if (showAnswer) {
      console.log(letter, answer, selectedOption, isClicked)
      if (isClicked && letter !== answer) setIsWrong(true)
      if (answer === letter) setIsAnswer(true)
    }
    else setIsAnswer(false)
  }, [selectedOption, letter, showAnswer, answer, isClicked])


  const selectOption = () => {
    console.log("Option was selected")
    // if(!showAnswer) dispatch(lockUserOption(letter)
    onSelect(letter)
  }

  const getValue = (value: string) => {
    let temp = ""
    if(fiftyFiftyActive) {
      if(letter === answer || letter === nextBest) return value
      else return ""
    }else return value
  }

  return (
    <div onClick={selectOption} className={`option-wrap cursor-pointer ${ !showOptions || selectedOption ? "pointer-events-none" : ""}`}>
      <div className={`option bg-white flex items-center ${isClicked && "selected"} ${isAnswer && "answer"} ${isWrong && "wrong"}`}>
        <div className="text-2xl option-inner w-full h-full flex items-center">
          <div className={`opacity-0 flex items-center ${showOptions ? `option-${idx}` : ""} `}>
          <span className="mr-2">{letter}.</span>
          <span className="">{getValue(value)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
