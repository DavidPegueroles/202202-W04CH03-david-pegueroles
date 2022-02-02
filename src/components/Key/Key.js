import { useContext } from "react";
import DialingContext from "../../contexts/DialingContext";

const Key = () => {
  const { dialingButtons } = useContext(DialingContext);
  const { dialNumber } = useContext(DialingContext);
  const { deleteNumber } = useContext(DialingContext);

  return dialingButtons.map((dial) => {
    return (
      <li key={dial}>
        <button
          className={`key${dial === "delete" ? " big" : ""}`}
          onClick={
            dial === "delete" ? () => deleteNumber() : () => dialNumber(dial)
          }
        >
          {dial}
        </button>
      </li>
    );
  });
};

export default Key;
