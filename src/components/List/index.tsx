import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Box, TableHead, IconButton, TableRow, TableCell, FormControl } from '@mui/material';
import localities from '../../data/data.json';
import { ILocalities } from '../../data/interface';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;


  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>

      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
}


const places = localities.stores


const columns = [
  { field: 'name', numeric: false, headerName: 'Loja', width: 260 },
  { field: 'revenue', numeric: true, headerName: 'Faturamento', width: 130 },
];

export default function List(): JSX.Element {
  const [rows, setRows] = useState(places);


  const copyOfListOfObjects = [...places];

  function updateObjects(places: any) {

    return places.map((place: any) => {
      // const newPlace = {...place};

      const new_obj = { ...place, ...place.name, revenue: place.revenue}

      // Object.keys(newPlace).map((property) => {
      //   newPlace[property] = "Updated value";
      // });
  
      return new_obj;
    });
  }

  console.log(updateObjects(places))

  return (

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          getRowId={row => row.name}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableColumnFilter
          disableColumnMenu
          disableColumnSelector
          disableSelectionOnClick
        />
      </div>

  )
}
