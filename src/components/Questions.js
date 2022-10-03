import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import {CircularProgress, Container} from "@mui/material";
import Quiz from "./Quiz";

const Questions = () => {
    const {id} = useParams()
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const getQuestions = (categoryId) => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty&type=multiple`)
            .then((res) => {
                const {data: {results}} = res;
                if(results?.length) {
                    setQuestions(results)
                }
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getQuestions(id)
    }, [id])


    return (
        <Container sx={{minWidth: 'fit-content', textAlign: 'center'}}>
            {questions.length ?
                <Quiz
                    currentNumber={currentQuestion}
                    question={questions[currentQuestion]}
                    changeQuestion={() => setCurrentQuestion(currentQuestion+1)}
                />:
                <CircularProgress color="success"  sx={{marginTop: '35%'}}/>
            }
        </Container>
    )
}

export default Questions