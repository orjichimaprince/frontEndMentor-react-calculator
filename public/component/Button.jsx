import "./Button.css";

const Button = ({
  symbol,
  color,
  backgroundColor,
  handleClick,
  width,
  boxShadow,
}) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="button-wrapper"
      style={{
        backgroundColor: color,
        width: width,
        boxShadow: boxShadow,
      }}
    >
      {symbol}
    </div>
  );
};

export default Button;
