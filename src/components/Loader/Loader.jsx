import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "../Loader/LoaderComponent.module.css";

export default function LoaderComponent() {
  return (
    <div className={s.loader}>
      <Loader type="Grid" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
