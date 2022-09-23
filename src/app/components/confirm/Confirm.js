import logo from "../../assets/icon-complete.svg";
import Styles from "../../styles/App.module.scss";
import DataJson from "../../data/data.json";

const Confirm = (props) => {
    const confirmData = DataJson.confirmComponent;
    return (
      <>
        <div className={Styles.confirm}>
            <img src={logo} alt="transaction completed"/>
            <h1>{confirmData.thanks}</h1>
            <p>{confirmData.details}</p>
            <button type="button" onClick={props.onContinue}>{confirmData.button_text}</button>
        </div>
      </>
    );
  }
  export default Confirm;