import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

export default function Details() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Consignment Details
          </Typography>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <b>SHIPPER NAME</b>
            </TableCell>
            <TableCell>ABC Shippers</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>RECEIVER NAME</b>
            </TableCell>
            <TableCell>XYZ Retails</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>PRODUCT NAME</b>
            </TableCell>
            <TableCell>MEDICINE</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>PRODUCT SPECIFICATION</b>
            </TableCell>
            <TableCell>FRAGILE</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>QUANTITY</b>
            </TableCell>
            <TableCell>500</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
