import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface selectFieldProps {
    label?: string;
    options: string[];
    className?: string;
    getValue: (value: string) => void;
    name?: string;
    ref?: any
}
const SelectField: React.FunctionComponent<selectFieldProps> = ({ label, options, className, getValue, name, ref }) => {
    const [select, setSelect] = useState('');
    const handleSelect = (e: React.SyntheticEvent<EventTarget>) => {
        const value = (e.target as HTMLInputElement).value;
        setSelect(value);
        getValue(value);
    };
    return (
        <FormControl  variant="outlined" className={className} fullWidth>
            <InputLabel id="select-field">{label}</InputLabel>
            <Select  name={name} inputRef={ref}  labelId="select-field" value={select} onChange={handleSelect} label={label}>
                {options.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectField;
