import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    customBtn: {
        margin: theme.spacing(1),
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        width: '80%',
        border: '2px solid',
        borderRadius: '2px',
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: '#858484',
        borderColor: '#696969',
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