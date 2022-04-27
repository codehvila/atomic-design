import styles from "./Text.module.css";

const Text = ({
  css = { textColor: "#353535" },
  textContent = "Lorem ipsum dolor sit amet",
  children,
}) => {
  const { textColor } = css;
  return (
    <p className={styles.Text} style={{ "--textColor": textColor }}>
      {children ? children : textContent}
    </p>
  );
};

export default Text;
