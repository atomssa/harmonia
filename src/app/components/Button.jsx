
function Button(props) {

  const { btn_type, btn_value, isClicked, onBtnClicked, children } = props;

  const handleClick = () => {
    onBtnClicked(btn_type, btn_value);
  };

  const buttonStyle = () => {
    // if (isClicked) {
    //   console.log(
    //     `Button ${children}, typ=${btn_type} val=${btn_value} isClicked=${isClicked}`
    //   );
    // }
    if (isClicked) return "btn mx-2 text-white bg-primary";
    else
      return "btn mx-2 text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500";
  };
  return (
    <div
      onClick={handleClick}
      className={buttonStyle()}
    >
      {children}
    </div>
  );
}

export default Button;
