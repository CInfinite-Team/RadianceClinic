import { ChevronDown } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const QueDropDown = ({ Question, Answer, opened }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleQuestion = useCallback(() => {
    setShowAnswer((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (opened) {
      setShowAnswer(true);
    }
  }, [opened]);
  return (
    <div className="p-4 transition-all bg-white duration-500 shadow rounded-sm space-y-2" >
      <header
        className={`header flex justify-between items-center ${
          showAnswer && "text-[#9780bb]"
        } cursor-pointer transition-all duration-500 delay-300`}
        onClick={toggleQuestion}
      >
        <div
          className={`question font-medium text-[#574671]  `}
          style={{ fontSize: "clamp(16px, 8vw, 20px) " }}
        >
          {showAnswer && "Q: "} {Question}
        </div>
        <ChevronDown
          className={`${
            showAnswer && "rotate-180"
          } transition-all duration-300`}
        />
      </header>
      {showAnswer && <div className={`answer text-lg ${showAnswer && "text-[#8162b3]" } `} dangerouslySetInnerHTML={{ __html: 'A: '+Answer }} />}

    </div>
  );
};

export default QueDropDown;
