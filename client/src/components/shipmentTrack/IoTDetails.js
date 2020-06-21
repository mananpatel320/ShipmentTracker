import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

export default function IoTDetails() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            IoT Devices
          </Typography>
        </TableHead>
        <TableHead></TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <b>NAME</b>
            </TableCell>
            <TableCell>
              <b>
                THRESHOLD <br />
                (Lower Value)
              </b>
            </TableCell>
            <TableCell>
              <b>
                THREHOLD <br />
                (Upper Value)
              </b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>TEMPERATURE </b>(°C)
            </TableCell>
            <TableCell>27</TableCell>
            <TableCell>40</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>PRESSURE </b>(Pa)
            </TableCell>
            <TableCell>56</TableCell>
            <TableCell>78</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>HEARTBEAT </b>(BPM)
            </TableCell>
            <TableCell>30</TableCell>
            <TableCell>45</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
