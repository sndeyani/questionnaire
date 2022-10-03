import React from 'react';
import PropTypes from "prop-types";
import {Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Typography from "./common/Typography";
import Button from "./common/Button";

const Summary = ({score}) => {
    const navigate = useNavigate()

    return (
        <Container sx={{textAlign: 'center'}}>
            <Typography
                variant={'h3'}
                text={'Thank you'}
                space={{top: 134, bottom: 12}}
            />
            <Button
                text={'View History'}
                variant={'transparent'}
                onClick={() => navigate('/history')}
            />
            <Typography
                variant={'h5'}
                text={`Your Score: ${score || 0} / 10`}
                space={{top: 134}}
            />
            <Button
                size={'sm'}
                text={'Back to home'}
                space={{top: 100, bottom: 0}}
                onClick={() => navigate('/')}
            />
        </Container>
    );
};

export default Summary;

Summary.propTypes = {
    score: PropTypes.number
}