import { useContext } from "react";
import DialingContext from "../../contexts/DialingContext";

const Key = () => {
  const { dialingButtons } = useContext(DialingContext);

  return dialingButtons.map((dial) => {
    return (
      <li>
        <button className={`key${dial === "delete" ? " big" : ""}`}>
          {dial}
        </button>
      </li>
    );
  });
};

export default Key;
