import Styles from "../../styles/App.module.scss";

const BackCard = (props) => {
    return(
        <>
           <div className={Styles.back_card}>
                <div className={Styles.back_card_cvc}>{props.cvv}</div>
           </div>
        </>
    )
}

export default BackCard;