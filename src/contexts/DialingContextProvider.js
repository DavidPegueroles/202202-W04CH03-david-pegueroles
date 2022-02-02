import { useState } from "react";
import DialingContext from "./DialingContext";

const DialingContextProvider = ({ children }) => {
  const dialingButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];

  const [dialedNumbers, setDialedNumbers] = useState([]);

  const dialNumber = (number) => {
    setDialedNumbers([...dialedNumbers, number]);
    console.log(dialedNumbers);
  };

  return (
    <DialingContext.Provider
      value={{ dialingButtons, dialNumber, dialedNumbers }}
    >
      {children}
    </DialingContext.Provider>
  );
};

export default DialingContextProvider;
