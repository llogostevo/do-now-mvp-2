"use client";
import useLLM from "usellm";
import { useState } from "react";

export default function History() {
    const llm = useLLM();
    const [topic, setTopic] = useState("");
    const [result, setResult] = useState("");

    async function handleClick() {
        try {
            await llm.chat({
                messages: [
                    {
                        role: "system",
                        content: `You're a teacher planner bot. Given a topic, generate an question for a secondary student to complete. It should be a simple question that utilises the keywords describe or explain.`,
                    },
                    { role: "user", content: `Subject: History, Level: GCSE, Specification: Pearson Edexcel Level 1/Level 2 GCSE (9-1) in History (1HI0), Topic: ${topic}` },
                ],
                stream: true,
                onStream: ({ message }) => setResult(message.content),
            });
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    }
    return (
        <div className="min-h-screen mx-auto my-8 max-w-4xl px-4 sm:px-0">
            <h1 className="text-center mb-4 text-2xl sm:text-3xl">Do Now Generator</h1>
            <ul className="m-5">
                <li className="p-1"><span className="font-bold">Subject</span>: Geography</li>
                <li className="p-1"><span className="font-bold">Level</span>: GCSE</li>
                <li className="p-1"><span className="font-bold">Specification</span>: Pearson Edexcel Level 1/Level 2 GCSE 9-1 in History 1HI0</li>
            </ul>
            <div className="flex flex-col space-y-2">
                <textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter a Topic"
                    className=" h-28 p-4 text-lg text-black rounded border overflow-auto"
                />
                <button
                    className="rounded border border-black dark:border-white p-2"
                    onClick={handleClick}
                >
                    Submit
                </button>
            </div>
            <div className="mt-4 whitespace-pre-wrap">{result}</div>
        </div>

    );
}