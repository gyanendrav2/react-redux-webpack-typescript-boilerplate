import React from 'react';
import { Typography, Button } from '@material-ui/core';
import SelectField from '../Inputs/SelectField';

interface AddButtonProps {
    icon?: any;
    title: string;
    btnTitle: string;
    btnIcon?: any;
    trigger?: () => void;
    style?: object;
    component?: string;
    hideBtn?: boolean;
}
const AddButton: React.FunctionComponent<AddButtonProps> = ({
    icon,
    title,
    btnTitle,
    btnIcon,
    trigger,
    component,
    hideBtn,
    ...props
}) => {
    const getComponent = () => {
        switch (component) {
            case 'select': {
                return (
                    <div className="dropdown-container">
                        <SelectField
                            className="custom-input mb-0"
                            label="Permission For"
                            options={['Admin', 'Manager', 'Teacher', 'Staff', 'Parent']}
                            getValue={() => {}}
                        />
                    </div>
                );
            }
            default: {
                return (
                    <Button {...props} startIcon={btnIcon} onClick={trigger} className="rounded-btn">
                        {btnTitle}
                    </Button>
                );
            }
        }
    };
    return (
        <div className="student-header-container">
            <div className="student-header">
                <div className="img-container">
                    {icon}
                    <Typography className="heading">{title}</Typography>
                </div>
                {hideBtn ? null : getComponent()}
            </div>
        </div>
    );
};

export default AddButton;
