import React from 'react'
import Button from '@material-ui/core/Button';
import { useStyles } from './ButtonStyles';
import { Link as RouterLink } from 'react-router-dom';

interface RedirectButtonProps {
    to: string;
    text: string;
}

export const RedirectButton: React.FC<RedirectButtonProps> = ({ to, text }) => {
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            className={classes.customBtn}
            component={RouterLink}
            to={to}>
            {text}
        </Button>
    );
}