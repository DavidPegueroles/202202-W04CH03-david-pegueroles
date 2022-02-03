const Action = ({ href, className, text, actionOnClick }) => {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        event.preventDefault();

        actionOnClick();
      }}
    >
      {text}
    </a>
  );
};

export default Action;
