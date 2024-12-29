import React from 'react';

const Card = ({ title, description }) => {
    const boxStyle = {
        padding: '20px',
        width: 'auto',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        margin: '10px',
        boxSizing: 'border-box',
        display: 'inline-block',
        '@media (max-width: 600px)': {
            width: '100%',
            padding: '10px',
            margin: '5px'
        }
    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        '@media (max-width: 600px)': {
            fontSize: '16px',
            marginBottom: '8px'
        }
    };

    const descriptionStyle = {
        fontSize: '14px',
        color: '#666',
        '@media (max-width: 600px)': {
            fontSize: '12px'
        }
    };

    return (
        <div style={boxStyle}>
            <div style={titleStyle}>{title}</div>
            <div style={descriptionStyle}>{description}</div>
        </div>
    );
};

export default Card;