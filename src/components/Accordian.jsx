import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./UI/FAQ";

const Accordian = () => {
  const [data, setData] = useState();
  let [activeId, setActiveId] = useState(false);

  const handleToggleBtn = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  useEffect(() => {
    setData(faq);
  }, []);

  return (
    <div className="w-full h-auto flex p-5 flex-col items-center justify-around gap-8 bg-gray-600">
      <h1 className="font-black text-white tracking-wider text-3xl border-b-2 pb-1">
        FAQ's Accordian
      </h1>
      <ul className="w-10/12 p-4 flex flex-col items-center justify-center">
        {data?.map((curFaq) => {
          return (
            <FAQ
              key={curFaq.id}
              faq={curFaq}
              isActive={activeId === curFaq.id}
              onToggle={() => handleToggleBtn(curFaq.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordian;
