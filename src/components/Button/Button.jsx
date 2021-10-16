import s from "../Button/Button.module.css";

export default function Button({ OnClick, children }) {
  return (
    <button type="button" className={s.Button} onClick={OnClick}>
      {children}
    </button>
  );
}
