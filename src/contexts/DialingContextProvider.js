import { useEffect, useState } from "react";
import DialingContext from "./DialingContext";

const DialingContextProvider = ({ children }) => {
  const dialingButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];

  const [dialedNumbers, setDialedNumbers] = useState([]);
  const [called, setCalled] = useState(false);
  const [ableToCall, setAbleToCall] = useState(false);

  useEffect(() => {
    if (dialedNumbers.length === 9) {
      setAbleToCall(true);
    } else {
      setAbleToCall(false);
    }
  }, [dialedNumbers.length]);

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

  const call = () => {
    console.log("A");
    setCalled(true);
  };

  const hang = () => {
    console.log("B");
  };

  return (
    <DialingContext.Provider
      value={{
        dialingButtons,
        dialNumber,
        deleteNumber,
        dialedNumbers,
        called,
        ableToCall,
        call,
        hang,
      }}
    >
      {children}
    </DialingContext.Provider>
  );
};

export default DialingContextProvider;
