import React from 'react'
import Button from '@material-ui/core/Button';
import { useStyles } from './ButtonStyles';

interface OptionsButtonProps {
    OptionName: string;
    optionSelected: (OptionName: string) => void;
}

export const OptionsButton: React.FC<OptionsButtonProps> = ({ OptionName, optionSelected }) => {
    const classes = useStyles();
    return (
        <Button variant="contained" onClick={() => optionSelected(OptionName)} className={classes.customBtn}>
            <span dangerouslySetInnerHTML={{ __html: OptionName }} />
        </Button>
    );
}