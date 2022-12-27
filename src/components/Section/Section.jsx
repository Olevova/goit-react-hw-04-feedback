import PropTypes from "prop-types";
import style from "./Section.module.scss";


export const Section = ({title, children}) => {
    return(
    <>
    <h1 className={style.section}>{title}</h1> 
    {children}
    </>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}
