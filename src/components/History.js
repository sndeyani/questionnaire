import React, {useEffect, useState} from 'react';
import {
    Box,
    Breadcrumbs,
    CircularProgress,
    Container, Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import {getLocalStorageData} from "../utils";
import Typography from "./common/Typography";

const History = () => {
    const [storageData, setStorageData] = useState([]);

    useEffect(() => {
        setStorageData(getLocalStorageData())
    }, [])

    return (
        <Container sx={{textAlign: 'center', transition: 'opacity 300ms ease-in-out'}}>
            <Breadcrumbs aria-label="breadcrumb" sx={{mt: 2}}>
                <Link underline="hover" color="#3A7859" href="/">Home</Link>
                <Typography text={'History'}/>
            </Breadcrumbs>

            <Typography variant={'h3'} text={'Your answers'} space={{top: 30, bottom: 30}}/>
            <Paper className="container" sx={{p:0}}>
                {storageData?.length > 0 ?
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant={'h6'} text={'Category'}/></TableCell>
                                <TableCell><Typography variant={'h6'} text={'Questions - Answers'}/></TableCell>
                                <TableCell><Typography variant={'h6'} text={'Score'}/></TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {storageData.map(data => {
                            const answers = JSON.parse(data);
                            const categories = Object.keys(answers)
                            return (
                                categories.map(category => <TableRow key={category}>
                                    <TableCell component="th" scope="row"><Typography variant={'h6'}
                                                                                      text={category}/></TableCell>
                                    <TableCell component="th" scope="row">
                                        {answers && answers[category].map(answers => (
                                            <Box key={answers.question} my={1}>
                                                <Box component="span" mr={1} fontSize={'13px'}
                                                     dangerouslySetInnerHTML={{__html: answers.question}}/>
                                                <Box
                                                    component="span"
                                                    sx={{color: 'green'}}
                                                    fontWeight={'bold'}
                                                    dangerouslySetInnerHTML={{__html: answers.answer}}
                                                />
                                            </Box>
                                        ))}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant={'h6'}
                                                    text={`${answers[category].slice(-1)?.[0]?.score} / 10`}/>
                                    </TableCell>
                                </TableRow>)
                            )
                        })}
                    </TableBody>
                </Table> : <CircularProgress color="success" sx={{marginTop: '35%'}}/>}
            </Paper>
        </Container>
    );
};

export default History;