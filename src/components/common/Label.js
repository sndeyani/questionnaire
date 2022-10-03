import React from "react";
import PropTypes from "prop-types";
import {styled} from "@mui/material";

const StyledLabel = styled('div')(({variant, type, space, size}) => ({
    padding: '4px 8px 6px',
    fontWeight: 700,
    fontFamily: 'Barlow',
    borderRadius: '12px 0px 12px 12px',
    ...(space && {
        marginTop: space.top || 'unsent',
        marginLeft: space.left || 'auto',
        marginRight: space.right || 'auto',
        marginBottom: space.bottom || 'unsent',
    }),
    ...(size === 'sm' && {
        lineHeight: '27px',
        width: '84px',
        height: "27px",
    }),
    ...(type === 'easy' && {
        background: '#42A976',
        color: '#fff'
    }),
    ...(type === 'medium' && {
        background: '#EAC505',
        color: '#fff'
    }),
    ...(type === 'hard' && {
        background: '#EF7D54',
        color: '#fff'
    })
}));

const Label = (props) => {
    const {
        text,
        variant,
        type,
        space,
        size,
    } = props;

    return (
        <StyledLabel
            variant={variant}
            size={size}
            type={type}
            space={space}
        >
            {text}
        </StyledLabel>
    );
}

export default Label;

Label.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    type: PropTypes.string,
    space: PropTypes.object,
    size: PropTypes.string,
};