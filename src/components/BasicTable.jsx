import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ tableData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>command ID</TableCell>
            <TableCell>キー</TableCell>
            <TableCell align="center">挙動</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, i) => (
            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {i}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.index}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell align="center">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
