import { useState } from "react";
import { CgCloseO } from "react-icons/cg";

const ChatSideCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(true);
  };

  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li
        className="mb-2 truncate cursor-pointer hover:font-bold"
        onClick={onClickModal}
      >
        {question}
      </li>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-30 w-full h-full z-10">
          <div className="bg-white rounded-2xl fixed top-1/2 left-1/2 p-4 -translate-x-1/2 -translate-y-1/2 flex flex-col">
            <button className="self-end mb-4" onClick={onClickClose}>
              <CgCloseO size={20} />
            </button>
            <div className="mb-3">Q. {question}</div>
            <div className="border"></div>
            <div className="mt-3 font-semibold">A. {answer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSideCard;
