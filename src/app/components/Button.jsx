const Button = ({ isClicked, onBtnClicked, children }) => {
  const buttonStyle = () => {
    if (isClicked) return "btn ml-2 mr-1 my-1 text-white bg-primary";
    else
      return "btn ml-2 mr-1 my-1 text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500";
  };
  return (
    <div onClick={onBtnClicked} className={buttonStyle()}>
      {children}
    </div>
  );
};

export default Button;
