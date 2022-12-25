import React from 'react';
import "./Typography.scss";

export const Heading = ({ title }) => {
    return (
        <h1 className='heading'>{title}</h1>
    )
}
export const Heading2 = ({ title }) => {
    return (
        <h1 className='heading2'>{title}</h1>
    )
}
export const SubHeading = ({ title }) => {
    return (
        <h3 className='subheading'>{title}</h3>
    )
}
