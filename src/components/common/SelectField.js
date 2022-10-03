import React from 'react'
import PropTypes from "prop-types";

import {MenuItem, Select} from '@mui/material'
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    maxWidth: '100%',
                    width: '320px',
                    height: '56px',
                    background: '#F6F7F8',
                    border: 'none',
                    textAlign: 'left',
                    boxShadow: '0px 0px 0px 2px #E7EBF1 inset',
                    borderRadius: '18px',
                    "&.has-value": {
                        boxShadow: '0px 0px 0px 2px #D4E0E0 inset',
                        '&>div': {
                            color: '#354153'
                        }
                    },
                    "&.Mui-focused": {
                        boxShadow: '0px 0px 0px 2px #95B6A9 inset',
                        transition: 'box-shadow 100ms ease',
                    }
                },
                notchedOutline: {
                    border: 'none',
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                outlined: {
                    borderRadius: '18px',
                    color: '#9EA0A4',
                    fontWeight: 500,
                    fontSize: '18px',
                    fontFamily: 'Barlow',
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    transition: 'height 300ms ease-in-out 100ms',
                    maxWidth: '324px',
                    minWidth: '324px',
                    height: '254px',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    transition: 'height 1000ms ease-in-out 100ms',
                    marginTop: '6px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
                    borderRadius: '18px'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    padding: '2px 10px',
                    '&:first-of-type': {
                        backgroundColor: 'transparent'
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'transparent',
                        color: '#3A7859',
                        '&>button': {
                            backgroundColor: '#E7EBF1',
                            color: '#3A7859'
                        }
                    },
                    '&:hover': {
                        backgroundColor: 'transparent'
                    },
                    '&>button': {
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        backgroundColor: 'transparent',
                        borderRadius: '10px',
                        border: 'none',
                        padding: '10px',
                        height: '45px',
                        fontSize: '18px',
                        fontWeight: 500,
                        fontFamily: 'Barlow',
                        "&:hover": {
                            backgroundColor: '#E7EBF1',
                            color: '#3A7859'
                        }
                    }
                }
            }
        }
    }
});


const SelectField = ({options, name, value, handleChange}) => {
    return (
        <ThemeProvider theme={theme}>
            <Select
                name={name}
                value={value}
                displayEmpty={true}
                onChange={handleChange}
                className={value && 'has-value'}
                renderValue={value => value || 'Category'}
            >
                {options?.map(option =>
                    <MenuItem value={option.name} key={option.id}>
                        <button>{option.name}</button>
                    </MenuItem>
                )}
            </Select>
        </ThemeProvider>
    );
}

export default SelectField;

SelectField.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};