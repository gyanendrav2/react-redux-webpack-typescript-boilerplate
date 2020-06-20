import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { colors } from '../../Styles/colors';
import { Search, Clear, CloudDownloadOutlined } from '@material-ui/icons';
import SearchBoxFilterExport from '../Inputs/SearchBoxFilterExport';
import { TablePagination } from '@material-ui/core';

const CardTable = ({
    tableHeight,
    columns,
    rowData,
    selectable,
    headerPadding,
    showPagination,
    showToolbar,
    rowClick,
    wantRows,
    getWantRows,
    filterRender
}) => {
    return (
        <MaterialTable
            title=""
            className="card-table-data"
            onSelectionChange={(rows) => {
                if (wantRows) {
                    getWantRows(rows);
                }
            }}
            columns={columns}
            data={rowData}
            components={{
                Toolbar: (props) => (showToolbar ? <SearchBoxFilterExport filter={filterRender} availabeProps={props} /> : null),
            }}
            onRowClick={rowClick}    
            options={{
                headerStyle: {
                    height: 1,
                    paddingTop: headerPadding,
                    paddingBottom: headerPadding,
                    borderTop: `1px solid ${colors.borderPrimary}`,
                    borderBottom: `1px solid ${colors.borderPrimary}`,
                    fontSize: 11,
                },
                rowStyle: {
                    color: colors.textPrimary,
                    fontWeight: 500,
                },
                maxBodyHeight: tableHeight ? tableHeight : '21rem',
                selection: selectable,
                showTextRowsSelected: false,
                exportButton: true,
                paging: showPagination,
            }}
            icons={{
                Search: () => <Search />,
                ResetSearch: () => <Clear style={{ fontSize: 15 }} />,
                Export: () => <CloudDownloadOutlined />,
            }}
        />
    );
};

CardTable.propTypes = {
    tableHeight: PropTypes.string,
    columns: PropTypes.array,
    rowData: PropTypes.array,
    selectable: PropTypes.bool,
    headerPadding: PropTypes.number,
    showPagination: PropTypes.bool,
    showToolbar: PropTypes.bool,
    rowClick: PropTypes.func,
    wantRows: PropTypes.bool,
    getWantRows: PropTypes.func,
    filterRender: PropTypes.element
};

export default memo(CardTable);
