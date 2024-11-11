import Wrapper from "../assets/wrappers/InspirationBox";
import nextIcon from "../assets/images/next.png";
import previousIcon from "../assets/images/previous.png";
import { useAppContext } from "../context/appContext";
import { useEffect, useState } from "react";

const Inspiration = () => {
  const { quotes, getAllQuotes } = useAppContext();
  const [random, setRandom] = useState();

  useEffect(() => {
    getAllQuotes();
  }, []);

  useEffect(() => {
    getRandomQuote();
  }, [quotes]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandom(randomIndex);
  };

  const handlePrevious = () => {
    if (random - 1 >= 0) {
      setRandom(random - 1);
    } else {
      setRandom(quotes.length - 1);
    }
  };

  const handleNext = () => {
    if (random + 1 < quotes.length) {
      setRandom(random + 1);
    } else {
      setRandom(0);
    }
  };

  return (
    <Wrapper>
      <img
        className="icon"
        src={previousIcon}
        onClick={handlePrevious}
        alt="previous icon"
      />

      <div className="inspire-bg"></div>
      <div className="text-container">
        {quotes[random] && (
          <h4 className="inspire-text">{quotes[random].text}</h4>
        )}
      </div>
      <img
        className="next-icon icon"
        src={nextIcon}
        onClick={handleNext}
        alt="next icon"
      />
    </Wrapper>
  );
};
export default Inspiration;
