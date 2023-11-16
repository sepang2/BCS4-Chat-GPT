import axios from "axios";
import { useState } from "react";
import { CgChevronUpO, CgSpinner } from "react-icons/cg";

const ChatBar = ({ chatList, setChatList }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();
      if (!newQuestion) return;

      setIsLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: newQuestion,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
          },
        }
      );
      setChatList([
        ...chatList,
        {
          question: newQuestion,
          answer: response.data.choices[0].message.content,
        },
      ]);
      setNewQuestion("");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="h-24 absolute bottom-0 w-full">
      <form
        className="border-t-2 border-gray-300 h-full flex items-center px-4"
        onSubmit={onSubmitChat}
      >
        <input
          className={`mr-4 grow py-1 px-2 focus:outline-none border-2 focus:border-sky-500 ${
            isLoading && "bg-gray-100 text-gray-500"
          }`}
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          disabled={isLoading}
          placeholder="Ask anything !"
        />
        <button
          className="w-8 py-[6px] text-2xl bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-200 rounded-full flex justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <CgSpinner className="animate-spin-slow" />
          ) : (
            <CgChevronUpO />
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatBar;
