import React from "react";
import PropTypes from "prop-types";
import { StaticValue, StaticNot} from "../Statistics/Static.styled"




export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StaticNot>
        <StaticValue>Good : {good} </StaticValue>
        <StaticValue>Neutral : {neutral}</StaticValue>
        <StaticValue>Bad : {bad} </StaticValue>
        <StaticValue>Total : {total}</StaticValue>
        <StaticValue>Positive : {positivePercentage}%</StaticValue>
        </StaticNot>
    )
} 

Statistic.propTypes = {
    good:  PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired ,
    bad: PropTypes.number.isRequired ,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
    
}