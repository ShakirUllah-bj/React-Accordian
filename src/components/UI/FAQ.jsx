import { MdExpandLess, MdExpandMore } from "react-icons/md";

const FAQ = ({ faq, onToggle, isActive }) => {
  const { id, question, answer, tags } = faq;

  return (
    <li className="rounded shadow-sm/50 bg-gray-800 text-white mb-1 shadow-black p-4 border-l-2 border-l-gray-400 w-full flex justify-between items-start">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">
          {id}: {question}
        </h1>

        {isActive && (
          <div className="flex flex-col gap-2">
            <p>{answer}</p>
            <span>#{tags.join(" #")}</span>
          </div>
        )}
      </div>
      <button
        onClick={onToggle}
        className={`shadow-lg/50 shadow-black transition-all duration-100 p-2 text-3xl rounded-full ${
          isActive ? "bg-red-600" : "bg-green-600"
        } text-white font-semibold cursor-pointer`}
      >
        {isActive ? <MdExpandLess /> : <MdExpandMore />}
      </button>
    </li>
  );
};

export default FAQ;
