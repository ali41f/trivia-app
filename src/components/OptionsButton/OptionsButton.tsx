import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { useStyles } from './ButtonStyles';

interface OptionsButtonProps {
    OptionName: string;
    optionSelectedHandler: (OptionName: string) => void;
    optionSelected?: boolean;
    correct?: string;
    list?: boolean;
}

export const OptionsButton: React.FC<OptionsButtonProps> = ({ OptionName, optionSelectedHandler, optionSelected, correct, list }) => {

    const classes = useStyles();
    const [wrongSelected, setWrongSelected] = useState<boolean>(false)

    const optionClickedHandler = () => {
        if (list && OptionName != correct && !optionSelected) setWrongSelected(true)

        optionSelectedHandler(OptionName)
    }

    return (
        <Button
            variant="contained"
            onClick={optionClickedHandler}
            disableRipple={optionSelected ? true : false}
            className={
                optionSelected ?
                    (correct == OptionName ? classes.correctOptionBtn :
                        (wrongSelected ? classes.wrongBtn : classes.selectedBtn)
                    ) :
                    classes.customBtn
            }
        >
            <span dangerouslySetInnerHTML={{ __html: OptionName }} />
        </Button>
    );
}