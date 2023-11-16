import { useEffect, useRef } from "react";
import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();

  useEffect(() => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight;
  }, [chatList]);

  return (
    <div className="h-screen grow max-w-[560px] flex flex-col justify-end">
      <ul ref={ulRef} className="mb-24 overflow-y-auto">
        {chatList.length === 0 ? (
          <div className="bg-purple-100 mb-6 self-start mr-[150px] ml-4 p-2 rounded-2xl shadow-lg">
            I'm ready to answer!
          </div>
        ) : (
          chatList.map((v, i) => (
            <ChatCard key={i} question={v.question} answer={v.answer} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ChatView;
