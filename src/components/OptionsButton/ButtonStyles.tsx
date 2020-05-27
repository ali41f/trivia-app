import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        width: 200,
        textAlign: 'left'
    },
    customBtn: {
        margin: theme.spacing(1),
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '8px 12px',
        width: '350px',
        borderRadius: '5px',
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: '#21BDA3',
        '&:hover': {
            backgroundColor: '#19ad94',
            boxShadow: 'none'
        },
        '&:active': {
            boxShadow: '#21BDA3',
            backgroundColor: '#19ad94',
        },
    },
    correctOptionBtn: {
        margin: theme.spacing(1),
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '8px 12px',
        width: '350px',
        borderRadius: '5px',
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: '#21BDA3',
        '&:hover': {
            backgroundColor: '#21BDA3',
            boxShadow: 'none'
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#21BDA3',
        },
    },
    wrongBtn: {
        margin: theme.spacing(1),
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '8px 12px',
        width: '350px',
        borderRadius: '5px',
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: '#d15858',
        '&:hover': {
            backgroundColor: '#d15858',
            boxShadow: 'none'
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#d15858',
        },
    },
    selectedBtn: {
        margin: theme.spacing(1),
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '8px 12px',
        width: '350px',
        borderRadius: '5px',
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: '#aaa',
        '&:hover': {
            backgroundColor: '#aaa',
            boxShadow: 'none'
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#aaa',
        },
    },
}));