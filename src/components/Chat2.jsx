import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chat2 = () => {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAIResponse = async () => {
    try {
      setLoading(true); // Indicate loading state
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = input; // Use the current value of input
      const response = await model.generateContent(prompt);
      setResult(response.response.text());
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResult("Failed to fetch response. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      fetchAIResponse(); // Trigger the AI response
    }
  };

  return (

    <div className="">
      <h1 className="m-5 font-bold text-white">AI Response</h1>
      <div
        className="bg-gray-200 h-80 w-960 m-5 text-2xl font-mono rounded-xl overflow-auto p-5"
        style={{ maxHeight: "500px" }}
      >
        {result && <p>{result}</p>}
      </div>

      <div className=" flex bg-white-700 flex-row justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9AnFuMRqBPbJlXiAAEcIyEuDGaR7qtZ3Qw&s" alt="" className="h-14 mt-6 m-5"/>
        <div className="">
       <input
  className="bg-white-700 h-12 bg-slate-200 rounded-md p-7 m-5"
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Type a message..."
  disabled={loading}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }}
/>
<button onClick={handleSend} disabled={loading} className="bg-orange-400  m-5 text-xl ml-10  rounded-md pl-6 pr-6 p-4">
          {loading ? "Loading..." : "send"}
        </button>

          </div>
      </div>


    </div>
  );
};

export default Chat2;
