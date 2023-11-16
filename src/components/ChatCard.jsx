const ChatCard = ({ question, answer }) => {
  return (
    <li className="flex flex-col gap-4 mb-6">
      <div className="bg-yellow-200 self-end ml-[150px] mr-4 p-2 rounded-2xl shadow-lg">
        {question}
      </div>
      <div className="bg-purple-100 self-start mr-[150px] ml-4 p-2 rounded-2xl shadow-lg whitespace-pre-wrap">
        {answer}
      </div>
    </li>
  );
};

export default ChatCard;
