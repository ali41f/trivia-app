import React from 'react'
import stayhome from '../assets/stay-home.gif';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        width: 200,
        textAlign: 'left'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    customBtn: {
        margin: theme.spacing(6, 1, 6, 1),
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        minWidth: '300px',
        border: '2px solid',
        borderRadius: '2px',
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: '#858484',
        borderColor: '#666',
        '&:hover': {
            backgroundColor: '#21BDA3',
            borderColor: '#21BDA3',
            boxShadow: 'none'
        },
        '&:active': {
            boxShadow: '#21BDA3',
            backgroundColor: '#21BDA3',
            borderColor: 'rgb(37, 197, 169)'
        },
    },
}));

interface WelcomeProps {
    category: string | number;
    setCategory: (r: string | number) => void;
    difficulty: string;
    setDifficulty: (r: string) => void;
    message: string
}

const Welcome: React.FC<WelcomeProps> = ({ category, setCategory, difficulty, setDifficulty, message }) => {

    const classes = useStyles();

    const handleChangeCategory = (event: any) => {
        setCategory(event.target.value);
    };

    const handleChangeDifficulty = (event: any) => {
        setDifficulty(event.target.value);
    };

    return (
        <React.Fragment>
            <Container className="App" maxWidth="sm">
                {message !== '' ? <Alert style={{ marginTop: '1rem' }} severity="info">{message}</Alert> : null}
                <img src={stayhome} className="App-image" alt="stay home gif" />
                <Typography variant="h5" component="h2">A TRIVIA GAME</Typography>

                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="category-native-simple">Category</InputLabel>
                        <Select
                            native
                            value={category}
                            onChange={handleChangeCategory}
                            inputProps={{
                                name: 'category',
                                id: 'category-native-simple',
                            }}
                        >
                            <option value="any">Any</option>
                            <option value={9}>General Knowledge</option>
                            <option value={10}>Entertainment: Books</option>
                            <option value={11}>Entertainment: Film</option>
                            <option value={12}>Entertainment: Music</option>
                            <option value={13}>Entertainment: Musicals &amp; Theatres</option>
                            <option value={14}>Entertainment: Television</option>
                            <option value={15}>Entertainment: Video Games</option>
                            <option value={16}>Entertainment: Board Games</option>
                            <option value={17}>Science &amp; Nature</option>
                            <option value={18}>Science: Computers</option>
                            <option value={19}>Science: Mathematics</option>
                            <option value={20}>Mythology</option>
                            <option value={21}>Sports</option>
                            <option value={22}>Geography</option>
                            <option value={23}>History</option>
                            <option value={24}>Politics</option>
                            <option value={25}>Art</option>
                            <option value={26}>Celebrities</option>
                            <option value={27}>Animals</option>
                            <option value={28}>Vehicles</option>
                            <option value={29}>Entertainment: Comics</option>
                            <option value={30}>Science: Gadgets</option>
                            <option value={31}>Entertainment: Japanese Anime &amp; Manga</option>
                            <option value={32}>Entertainment: Cartoon &amp; Animations</option>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="trivia_difficulty-label">Difficulty</InputLabel>
                        <Select
                            native
                            value={difficulty}
                            onChange={handleChangeDifficulty}
                            inputProps={{
                                name: 'difficulty',
                                id: 'trivia_difficulty-label',
                            }}
                        >
                            <option value="any">Any</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </Select>
                    </FormControl>
                </div>

                <Button
                    variant="contained"
                    className={classes.customBtn}
                    component={RouterLink}
                    to="/game"
                >Get Started</Button>
            </Container>
        </React.Fragment >
    );
}

export default Welcome