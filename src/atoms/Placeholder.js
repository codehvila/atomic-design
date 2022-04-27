import styles from "./Placeholder.module.css";

function Placeholder({
  css = { width: "0.5rem", height: "1.2rem", forClass: "red" },
}) {
  const { width, height, forClass } = css;

  return (
    <span
      className={styles.Placeholder + " " + styles[forClass]}
      style={{
        "--width": width,
        "--height": height,
        "--color": forClass,
      }}
    >
      &nbsp;
    </span>
  );
}

export default Placeholder;
