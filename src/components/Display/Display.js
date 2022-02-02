import { useContext } from "react";
import DialingContext from "../../contexts/DialingContext";

const Display = () => {
  const { dialedNumbers } = useContext(DialingContext);
  return <span className="number">{dialedNumbers}</span>;
};

export default Display;
