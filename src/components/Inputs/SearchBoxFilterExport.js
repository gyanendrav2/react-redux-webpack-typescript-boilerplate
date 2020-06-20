import React, { useState } from 'react';
import { Button, TextField, Typography, Checkbox, TablePagination } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { CsvBuilder } from 'filefy';
import OutlineBtn from '../Button/OutlineBtn';
import { colors } from '../../Styles/colors';

const SearchBoxFilterExport = ({ availabeProps, filter }) => {
    const [showFilter, setShowFilter] = useState(false);
    const handleFilter = () => {
        setShowFilter(!showFilter);
    };
    const handleExport = () => {
        const headColumn = Object.keys(availabeProps.renderData[0]);
        const rowData = [];
        availabeProps.renderData.map((item) => {
            rowData.push(Object.values(item));
        });
        new CsvBuilder('products.csv').setColumns(headColumn).addRows(rowData).exportFile();
    };
    return (
        <div className="search-box-container">
            <input
                onChange={(e) => {
                    console.log(availabeProps);
                    availabeProps.onSearchChanged(e.target.value);
                }}
                className="search-box"
                placeholder="Search here ..."
            />
            <div className="filter-container">
                {filter}
                <Button
                    className="export-btn"
                    endIcon={<ArrowDownward style={{ fontSize: '0.9rem' }} />}
                    onClick={handleExport}>
                    Export{' '}
                </Button>
            </div>
        </div>
        // </div>
    );
};

SearchBoxFilterExport.propTypes = {
    availabeProps: PropTypes.object,
    filter: PropTypes.element,
};

export default SearchBoxFilterExport;
