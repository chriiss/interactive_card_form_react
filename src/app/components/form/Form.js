import Styles from "../../styles/App.module.scss";
import DataJson from "../../data/data.json";


const Form = (props) => {
    const {handleSubmit, register, errors} = props;
    const formData = DataJson.formComponent;
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className={Styles.form_group}>
                    <label htmlFor="cardholder" className={Styles.uppercase}>{formData.label.firstName}</label>
                    <input type="text" id="cardholder" {...register("firstName", { required: true, maxLength: 15})}  placeholder="e.g. Jane Appleseed"/>
                    {errors.firstName && <span>{formData.error.firstName}</span>}
                </div>
                <div className={Styles.form_group}>
                    <label htmlFor="cardnumber" className={Styles.uppercase}>{formData.label.number}</label>
                    <input type="text" id="cardnumber" {...register("number", {required: true, pattern:/^[0-9+-]+$/, minLength: 16, maxLength: 16})} placeholder="e.g. 1234 5678 9123 0000" minLength="16" maxLength="16"/>
                    {errors.number && <span>{formData.error.number}</span>}
                </div>
                <div className={Styles.card_d_flex}>
                    <div className={Styles.form_group}>
                        <label htmlFor="month" className={Styles.uppercase}>{formData.label.exp}</label>
                        <input type="text" id="month" size="2" {...register("month", {required: true, pattern:/^[0-9+-]+$/, minLength: 2, maxLength: 2})} placeholder="MM" minLength="2" maxLength="2" min="1" max="12"/>
                        {errors.month && <span>{formData.error.month}</span>}
                    </div>
                    <div className={Styles.form_group}>
                        <label htmlFor="year" className={Styles.uppercase}>{formData.label.date}</label>
                        <input type="text" id="year" size="2" {...register("year", {required: true, pattern:/^[0-9+-]+$/, minLength: 2, maxLength: 2})} placeholder="YY" maxLength="2" min="1" max="12"/>
                        {errors.year && <span>{formData.error.year}</span>}
                    </div>
                    <div className={Styles.form_group}>
                        <label htmlFor="cvv" className={Styles.uppercase}>{formData.label.cvv}</label>
                        <input type="text" id="cvv" {...register("cvv", {required: true, pattern:/^[0-9+-]+$/, minLength: 3, maxLength: 3})} placeholder="e.g. 123" minLength="3" maxLength="3"/>
                        {errors.cvv && <span>{formData.error.cvv}</span>}
                    </div>
                </div>
                <input type="submit" value="Confirm"/>
            </form>
        </>
    )
}


export default Form;