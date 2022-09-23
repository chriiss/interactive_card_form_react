import Styles from "../styles/App.module.scss";
import FrontCard from "./frontCard/FrontCard";
import BackCard from "./backCard/BackCard";
import Form from "./form/Form";
import Confirm from "./confirm/Confirm";
import { useForm } from "react-hook-form";
import { useState } from "react";

let userDetails = {
    firstName: "Jane Appleseed",
    number: "0000000000000000",
    month: "00",
    year: "00",
    cvv: "000",
}

const Home = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isForm, setIsForm] = useState(false);
    const firstName = watch('firstName', userDetails.firstName);
    const number = watch('number', userDetails.number);
    const month = watch('month', userDetails.month);
    const year = watch('year', userDetails.year);
    const cvv = watch('cvv', userDetails.cvv);

    const onSubmit = () => {
        setIsForm(true);
    }
    const onContinue = () => {
        setIsForm(false);
    }
    return(
        <section>
            <div className={Styles.bg_main}>
                <FrontCard firstName={firstName} number={number} month={month} year={year} />
                <BackCard cvv={cvv}/>
            </div>
            {!isForm ?
            (
                <Form handleSubmit={handleSubmit(onSubmit)} register={register} errors={errors}/>
            ) : (
                <Confirm onContinue={onContinue}/>
            )}
        </section>
    )
}

export default Home;