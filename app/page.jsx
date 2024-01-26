"use client";

import Card from "@/components/Card.jsx";
import Printout from "@/components/Printout.jsx";

import { useRef, useState } from "react";

export default function Home() {
  const card = useRef();
  const [goal1, setGoal1] = useState("Publish an article in a new tag");
  const [goal2, setGoal2] = useState("Set a goal for comments on DEV posts");
  const [goal3, setGoal3] = useState("Share my weekly wins");

  return (
    <main className="grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-screen items-center justify-between p-8">
      <div className="w-full flex">
        <Card ref={card} goals={[goal1, goal2, goal3]} />
      </div>
      <Printout
        card={card}
        goals={[goal1, goal2, goal3]}
        setGoals={[setGoal1, setGoal2, setGoal3]}
      />
    </main>
  );
}
