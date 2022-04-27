import styles from "./Button.module.css";

const Button = ({ css, children }) => {
  const { bgColor, forClass, disabled } = css;
  return (
    <button
      type="button"
      className={
        styles.Button + " " + styles[disabled] + " " + styles[forClass]
      }
      style={{ "--bgColor": bgColor }}
    >
      {children}
    </button>
  );
};

export default Button;
