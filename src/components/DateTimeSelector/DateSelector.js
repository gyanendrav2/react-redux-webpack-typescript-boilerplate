import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';

const DateSelector = ({ getDate, style, icon }) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    useEffect(() => {
        //  getDate(selectedDate)
    }, [selectedDate]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                className="custom-input m-0"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                //label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                color="primary"
                InputProps={{ className: style }}
                keyboardIcon={icon}
                animateYearScrolling={true}
                fullWidth
            />
        </MuiPickersUtilsProvider>
    );
};

DateSelector.propTypes = {
    getDate: PropTypes.func,
    style: PropTypes.string,
    icon: PropTypes.element,
};

export default DateSelector;
