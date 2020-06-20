import 'date-fns';
import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';
import PropTypes from "prop-types";


const TimeSelector = ({getDate, toolbarDisable, label})=> {
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // useEffect(() => {
  //    getDate(selectedDate)
  // }, [selectedDate]);

  return (
    <MuiPickersUtilsProvider variant="outlined" utils={DateFnsUtils}>
        <KeyboardTimePicker
          disableToolbar={toolbarDisable}
          margin="normal"
          inputVariant="outlined"
          className="custom-input mt-0"
          id="date-picker-inline"
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          fullWidth
        />
    </MuiPickersUtilsProvider>
  );
}

TimeSelector.propTypes = {
    getDate: PropTypes.func,
    toolbarDisable: PropTypes.bool,
    label: PropTypes.string
}

export default TimeSelector;