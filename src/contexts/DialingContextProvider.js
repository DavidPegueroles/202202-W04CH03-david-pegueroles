import DialingContext from "./DialingContext";

const DialingContextProvider = ({ children }) => {
  const dialingButtons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
  ];

  return (
    <DialingContext.Provider value={{ dialingButtons }}>
      {children}
    </DialingContext.Provider>
  );
};

export default DialingContextProvider;
