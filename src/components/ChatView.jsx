import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  return (
    <div className="bg-yellow-100 h-screen grow max-w-[560px] flex flex-col justify-end">
      <ul className="bg-green-100 mb-24 overflow-y-auto">
        {chatList.length === 0
          ? "no chat"
          : chatList.map((v, i) => (
              <ChatCard key={i} question={v.question} answer={v.answer} />
            ))}
      </ul>
    </div>
  );
};

export default ChatView;
