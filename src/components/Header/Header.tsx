import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import './header.css'
import Grid from '@material-ui/core/Grid';
import useInterval from '../CustomHook/useInterval'

interface PointsTextProps {
    points: number
}

const PointsText: React.FC<PointsTextProps> = ({ points }) => (
    <span>{points}<br />points</span>
)

interface HeaderProps {
    page: string;
    timeUpPage: () => void;
    totalQuestions: Number;
    questionNum: Number;
    remainingSeconds: (seconds: number) => void;
    totalPoints: number;
}


const Header: React.FC<HeaderProps> = ({ page, timeUpPage, totalQuestions, questionNum, remainingSeconds, totalPoints }) => {

    const [seconds, setSeconds] = useState(15);

    useInterval(() => {
        if (seconds === 0) {
            timeUpPage()
        } else if (page == "question") {
            setSeconds(seconds - 1)
        }
    }, 1000);

    useEffect(() => {
        if (page == "correct") {
            remainingSeconds(seconds)
        }
        setSeconds(15)
    }, [page])


    return (
        <div className="header">
            <Container maxWidth="md">
                <Grid container alignItems="center" justify="center" spacing={0}>
                    <Grid item xs={4} md={3}>
                        Question {questionNum}/{totalQuestions}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        {page === "question" ? <PointsText points={totalPoints} /> : null}
                    </Grid>
                    <Grid item xs={4} md={3}>
                        Remaining Time: {seconds}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Header