import React, { useState, useEffect } from 'react';
import styles from './countryPicker.module.css'
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from '../../api';


export const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesToState = async () => {
            setCountries(await fetchCountries());
        };
        fetchCountriesToState();
    }, [])

    return (
        <div className={styles.container}>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                    <option value="">Global</option>
                    {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
}