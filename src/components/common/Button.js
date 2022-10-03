import React from "react";
import PropTypes from "prop-types";
import {styled} from "@mui/material";

const StyledButton = styled('div')(({theme, disabled, variant, space, size}) => ({
    borderRadius: '18px',
    outline: 'none',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Barlow',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: 'unset',
    padding: '15.3px',
    backgroundColor: '#3A7859',
    transition: 'all 300ms ease-in-out',
    [theme.breakpoints.down('lg') ]: {
        margin: '6px auto',
    },
    ...(space && {
        marginTop: space.top,
        marginLeft: space.left || 'auto',
        marginRight: space.right || 'auto',
        marginBottom: space.bottom,
    }),
    '&:hover': {
        backgroundColor: '#2D6A4C',
    },
    ...(size === 'sm' && {
        maxWidth: '150px',
        fontWeight: 700
    }),
    ...(size === 'md' && {
        width: '290px',
        fontWeight: 700
    }),

    ...(variant === 'transparent' && {
        background: 'transparent',
        fontWeight: 700,
        border: 'none',
        color: '#354153',
        '&:hover': {
            background: 'transparent',
        },
    }),
    ...(variant === 'outlined' && {
        boxSizing: 'border-box',
        background: 'transparent',
        margin: '0px 9px',
        border: '2px solid #95B6A9',
        color: '#354153',
        transition: 'all 300ms ease-in-out',
        '&:hover': {
            background: '#D4E0E0',
            borderColor: 'transparent',
            color: '#2D6A4C',

        },
        "&:active": {
            background: '#D4E0E0',
        },
    }),
    ...(disabled && {
        background: '#F6F7F8',
        cursor: 'not-allowed',
        pointerEvents: 'none',
        color: '#C4C4C4',
        boxShadow: '0px 0px 0px 2px #E7EBF1 inset'
    })
}));

const Button = (props) => {
    const {
        text,
        onClick,
        disabled = false,
        variant,
        type,
        space,
        size,
        decode
    } = props;

    return (
        <StyledButton
                onClick={onClick}
                disabled={disabled}
                variant={variant}
                size={size}
                type={type}
                space={space}
        >
            { decode ? <span dangerouslySetInnerHTML={{__html: text}}/> : text }
        </StyledButton>
    );
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.string,
    type: PropTypes.string,
    space: PropTypes.object,
    size: PropTypes.string,
    decode: PropTypes.bool
};