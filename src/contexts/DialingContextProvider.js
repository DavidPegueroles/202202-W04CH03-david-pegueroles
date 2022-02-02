import { useState } from "react";
import DialingContext from "./DialingContext";

const DialingContextProvider = ({ children }) => {
  const dialingButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];

  const [dialedNumbers, setDialedNumbers] = useState([]);

  const dialNumber = (number) => {
    if (dialedNumbers.length === 9) {
      return;
    }
    setDialedNumbers([...dialedNumbers, number]);
  };

  const deleteNumber = () => {
    setDialedNumbers(
      dialedNumbers.filter((element, dial) => dial < dialedNumbers.length - 1)
    );
  };

  return (
    <DialingContext.Provider
      value={{ dialingButtons, dialNumber, deleteNumber, dialedNumbers }}
    >
      {children}
    </DialingContext.Provider>
  );
};

export default DialingContextProvider;
