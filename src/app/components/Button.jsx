const Button = ({ isClicked, onBtnClicked, children }) => {
  const buttonStyle = () => {
    if (isClicked)
      return "btn ml-2 mr-1 my-1 text-white bg-primary shadow-inner";
    else
      return "btn ml-2 mr-1 my-1 text-primary bg-background-300 shadow-md border-primary border-2 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-gray-800 transition ease-out duration-500";
  };
  return (
    <div onClick={onBtnClicked} className={buttonStyle()}>
      {children}
    </div>
  );
};

export default Button;
