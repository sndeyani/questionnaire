import React from "react";
import PropTypes from "prop-types";
import {styled} from "@mui/material";

const StyledButtonTypography = styled('div')(({theme, variant, space}) => ({
    fontFamily: 'Barlow',
    maxWidth: '1080px',
    ...(space && {
        marginTop: space.top || 'unset',
        marginLeft: space.left || 'auto',
        marginRight: space.right || 'auto',
        marginBottom: space.bottom || 'unset',
    }),
    ...(variant === 'h3' && {
        fontWeight: 700,
        fontSize: '30px',
        color: '#3A7859',
        [theme.breakpoints.up('md')]: {
            fontSize: '50px',
        }
    }) ,
    ...(variant === 'h5' && {
        fontSize: '20px',
        color: '#354153',
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
        }
    }),
    ...(variant === 'h6' && {
        fontSize: '18px',
        color: '#354153',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        }
    })
}));

const Typography = (props) => {
    const {
        text,
        variant,
        type,
        space,
        decode = false
    } = props;

    return (
        <StyledButtonTypography
            variant={variant}
            type={type}
            space={space}
        >
            { decode ? <span dangerouslySetInnerHTML={{__html: text}}/> : text }
        </StyledButtonTypography>
    );
}

export default Typography;

Typography.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    type: PropTypes.string,
    space: PropTypes.object,
    size: PropTypes.string,
    decode: PropTypes.bool
};