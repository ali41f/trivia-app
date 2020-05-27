import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import './header.css'
import Grid from '@material-ui/core/Grid';


interface HeaderListProps {
    totalQuestions: Number;
    answeredNum: Number;
    totalPoints: number;
    correctAnswersNum: Number;
}


const HeaderList: React.FC<HeaderListProps> = ({ totalQuestions, answeredNum, totalPoints, correctAnswersNum }) => {


    return (
        <div className="header headerlist">
            <Container maxWidth="md">
                <Grid container alignItems="center" justify="center" spacing={0}>
                    <Grid item xs={4} md={3}>
                        Answered: {answeredNum}/{totalQuestions}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        Correct: {correctAnswersNum}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        Points: {totalPoints}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default HeaderList