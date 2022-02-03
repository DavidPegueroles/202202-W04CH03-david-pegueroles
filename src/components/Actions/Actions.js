import Action from "../Action/Action";
import Display from "../Display/Display";

import { useContext } from "react";
import DialingContextProvider from "../../contexts/DialingContextProvider";

const Actions = () => {
  const ableToCall = useContext(DialingContextProvider);
  const called = useContext(DialingContextProvider);
  const call = useContext(DialingContextProvider);
  const hang = useContext(DialingContextProvider);

  return (
    <div className="actions">
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      <Display />
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      <Action
        href={"1"}
        className={`call${ableToCall && !called ? " active" : ""}`}
        text={"call"}
        actionOnClick={() => {
          call();
        }}
      />
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <Action
        href={"1"}
        className={`hang${ableToCall && !called ? " active" : ""}`}
        text={"hang"}
        actionOnClick={() => {
          hang();
        }}
      />
    </div>
  );
};

export default Actions;
