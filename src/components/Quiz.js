import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {Box, Breadcrumbs, Grid, Link} from "@mui/material";
import Typography from "./common/Typography";
import {shuffle, toCapitalize} from "../utils";
import Button from "./common/Button";
import PropTypes from "prop-types";
import Label from "./common/Label";
import {answersReducer} from "../reducer";
import Summary from "./Summary";


const Quiz = ({question, changeQuestion, currentNumber }) => {
    const [options, setOptions] = useState([])
    const [category, setCategory] = useState('');
    const [answers, dispatch] = useReducer(answersReducer, [], undefined);

    useEffect(() => {
        if(question?.correct_answer){
            const data = question && shuffle([question?.correct_answer, ...question?.incorrect_answers]);
            setOptions(data)
        }
        if(question?.category){
            setCategory(question?.category)
        }
    }, [question])


    const handleOptionClick = useCallback((answer) => {
        dispatch({
            type: "addAnswer",
            payload: {
                category: question.category,
                question: question.question,
                difficulty: question.difficulty,
                correct_answer: question.correct_answer,
                answer
            }
        })
        changeQuestion()
    }, [question, changeQuestion])

    useEffect(() => {
        if(currentNumber === 10) {
            dispatch({type: 'saveAnswers', payload: category})
        }
    }, [currentNumber, category])

    return (
        <Box sx={{transition: 'all 1000ms linear'}}>
            {question ? <>
                <Breadcrumbs aria-label="breadcrumb" sx={{mt: 2}}>
                    <Link underline="hover" color="#3A7859" href="/">Home</Link>
                    <Typography text={category} />
                </Breadcrumbs>
                <Typography
                    variant={'h3'}
                    decode={true}
                    text={`Question ${currentNumber < 9 ? '0' + (currentNumber + 1) : 10}`}
                    space={{top: 134}}
                />
                <Label
                    size={'sm'}
                    space={{top: 22, bottom: 84}}
                    type={question?.difficulty}
                    text={toCapitalize(question?.difficulty)}/>

                <Typography variant={'h5'} decode={true} text={question?.question} space={{bottom: 72}}/>
                <Grid container alignItems={'center'}>
                    {options.map((option) => (
                        <Grid item xs={12} md={6} lg={3} key={option} >
                            <Button
                                size={'md'}
                                variant={'outlined'}
                                text={option}
                                decode={true}
                                space={{ bottom: 0}}
                                onClick={() => handleOptionClick(option)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </> : answers[category]?.length ? <Summary score={answers[category].slice(-1)[0]?.score}/> : null}
        </Box>
    );
};

export default Quiz;

Quiz.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func,
    currentNumber: PropTypes.number

}