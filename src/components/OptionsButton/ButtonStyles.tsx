import { makeStyles } from '@material-ui/core/styles';

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
        border: '2px solid',
        borderRadius: '2px',
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
}));