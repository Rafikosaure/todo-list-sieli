export const DeleteSvg = (props) => {
    /**
     * @param props.classname
     */
    return (
        <svg className={props.classname}  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
    )
}

export const UpdateSvg = (props) => {
    /**
     * @param props.classname
     */
    return(
        <svg className={props.classname} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4v6h6"></path>
            <path d="M23 20v-6h-6"></path>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10"></path>
            <path d="m23 14-4.64 4.36A9 9 0 0 1 3.51 15"></path>
        </svg>
    )  
}

export const DoneSvg = (props) => {
    /**
     * @param props.classname
     */
    return(
        <svg className={props.classname} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6 9 17l-5-5"></path>
            </svg>
    )
}

export const AddSvg = (props) => {
    /**
     * @param props.classname
     */
    return(
        <svg className={props.classname} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
        </svg>
    )
}