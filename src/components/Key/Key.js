import { useContext } from "react";
import DialingContext from "../../contexts/DialingContext";

const Key = () => {
  const { dialingButtons } = useContext(DialingContext);
  const { dialNumber } = useContext(DialingContext);

  return dialingButtons.map((dial) => {
    return (
      <li key={dial}>
        <button
          className={`key${dial === "delete" ? " big" : ""}`}
          onClick={() => dialNumber(dial)}
        >
          {dial}
        </button>
      </li>
    );
  });
};

export default Key;
