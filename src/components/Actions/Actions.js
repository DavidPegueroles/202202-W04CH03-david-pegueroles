import Display from "../Display/Display";

const Actions = () => {
  return (
    <div className="actions">
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      <Display />
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      <a href="#" className="call">
        Call
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a href="#" className="hang active">
        Hang
      </a>
    </div>
  );
};

export default Actions;
