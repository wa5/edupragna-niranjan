import { Grid } from '@mui/material';
import React from 'react';

export interface IBasicPropsTypesProps {}

const BasicPropsTypes: React.FC<IBasicPropsTypesProps> = (props) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item>jkjkk</Grid>
                <Grid item>jkjkk</Grid>
                <Grid item>jkjkk</Grid>
            </Grid>
        </>
    );
};

export default BasicPropsTypes;
