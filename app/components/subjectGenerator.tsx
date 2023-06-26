"use client"
import useLLM from "usellm";
import { useState } from "react";

type SubjectGeneratorProps = {
  subjectName: string;
  level: string;
  specification: string;
};

export default function SubjectGenerator({ subjectName, level, specification }: SubjectGeneratorProps) {
  const llm = useLLM();
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  async function handleClick() {
    try {
      await llm.chat({
        messages: [
          {
            role: "system",
            content: `You're a teacher planner bot. Given a Subject, Level, Exam Board, Topic. 
            Check the Subject, Exam Board and Level to see if the topic provided matches one of the specification points. 
            If it does, then provide 3 suitable questions that have come from a past examination series for that exam board. Do not pick questions that had images. 
            Do not make up questions
            Do not get questions from other exam boards unless they are on the same topic. 
            Pick a question that is less than 7 marks
            If the topic provided does not appear to relate then please say "This topic is not one that appears to relate to this subject or specification, please try again"
            Provide the output in the following format for each question
            
            Question 1. 
            Question: <the question>
            
            Question 2. 
            Question: <the question>
            
            Question 3 
            Question: <the question>`,
          },
          { 
            role: "user", 
            content: `<Subject: ${subjectName}>, <Level: ${level}>, <Exam Board: ${specification}>, <Topic: ${topic}>` 
          },
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
      <ul className="m-5">
        <li className="p-1"><span className="font-bold">Subject</span>: {subjectName}</li>
        <li className="p-1"><span className="font-bold">Level</span>: {level}</li>
        <li className="p-1"><span className="font-bold">Specification</span>: {specification}</li>
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
