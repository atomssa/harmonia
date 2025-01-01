const Button = ({ isClicked, onBtnClicked, children }) => {
  const buttonStyle = () => {
    if (isClicked) return "btn mx-2 text-white bg-primary";
    else
      return "btn mx-2 text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500";
  };
  return (
    <div onClick={onBtnClicked} className={buttonStyle()}>
      {children}
    </div>
  );
};

export default Button;
