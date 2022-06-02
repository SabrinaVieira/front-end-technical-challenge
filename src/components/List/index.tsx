import React, { useContext, useState } from 'react'
import {
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableFooter,
} from '@mui/material';
import localities from '../../data/data.json';
import { ILocalities } from '../../data/interface';
import { StoreDataContext } from '../../providers/SearchProvider';

const places = localities.stores

export default function List(): JSX.Element {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { storedata } = useContext(StoreDataContext);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - storedata.length) : 0;

  return (
    <>

      <TableContainer>
        <Table sx={{ minWidth: '100%' }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Loja</TableCell>
              <TableCell align="right">Faturamento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {storedata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    tabIndex={-1}
                    key={row.name}
                  >
                    <TableCell component="th"
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">R$ {row.revenue}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter>
        <TableRow>
          <TablePagination
            component="div"
            rowsPerPageOptions={[10,15]}
            rowsPerPage={rowsPerPage}
            count={storedata.length}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </>

  )
}
