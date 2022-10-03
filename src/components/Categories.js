import React, {memo, useCallback, useEffect, useReducer, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {Container} from '@mui/material'
import axios from "axios";
import {getLocalStorageData} from "../utils";
import {categoriesReducer} from "../reducer";

import SelectField from './common/SelectField'
import Button from "./common/Button";
import Typography from "./common/Typography";


const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState({id: null, name: ''})
    const [categories, dispatch] = useReducer(categoriesReducer, [], undefined);
    const [storageData, setStorageData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setStorageData(getLocalStorageData())
    }, [])

    const getCategories = () => {
        axios.get('https://opentdb.com/api_category.php')
            .then((res) => {
                const {data: {trivia_categories}} = res;
                if(trivia_categories?.length) {
                    dispatch({type: 'getCategories', payload: trivia_categories})
                }
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleCategoryChange = useCallback((event) => {
        const data = categories.find(cat => cat.name === event.target.value)
        setSelectedCategory(prevState => ({...prevState, ...data}))
    }, [categories])

    return (
        <Container sx={{textAlign: 'center'}}>
            <Typography variant={'h3'} text={'Trivia App'} space={{top: 134, bottom: 8}}/>
            {storageData?.length > 0 && <Button
                text={'View History'}
                variant={'transparent'}
                onClick={() => navigate('/history')}
            />}
            <Typography variant={'h5'} text={'Pick a Category'} space={{top: 126, bottom: 36}}/>
            <SelectField
                name={'category'}
                value={selectedCategory.name}
                options={categories}
                handleChange={handleCategoryChange}
            />
            <Button
                size={'sm'}
                text={'Start'}
                space={{top: 100, bottom: 0}}
                disabled={!selectedCategory.name}
                onClick={() => navigate(`/category/${selectedCategory.id}`)}
            />
        </Container>
    )
}

export default memo(Categories);