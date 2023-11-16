const ChatCard = ({ question, answer }) => {
  return (
    <li>
      <div className="w-[280px]">{answer}</div>
      <div className="w-[280px]">{question}</div>
    </li>
  );
};

export default ChatCard;
