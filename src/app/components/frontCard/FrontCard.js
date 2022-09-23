import Styles from "../../styles/App.module.scss";


const FrontCard = (props) => {
    const { firstName, number, month, year} = props;
    return(
        <>
            <div className={Styles.front_card}>
                <div className={Styles.svg_flex}>
                    <svg fill="#ffffff" viewBox="0 0 512 512" width="30" title="circle">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                    <svg fill="#ffffff" viewBox="0 0 512 512" width="22" title="circle-notch">
                        <path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
                    </svg>
                </div>
                <div className={Styles.number}>
                    {number.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}
                </div>
                <div className={Styles.card_info}>
                    <div>
                        {firstName}
                    </div>
                    <div>
                        {month}/{year}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontCard;