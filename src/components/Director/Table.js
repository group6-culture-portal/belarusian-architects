import React, { useContext, useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import languageContext from '../../context/languageContext';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const stylesPaper = withStyles(theme => ({
  root: {
    width: '98%',
    margin: '0 auto',
  },
}))(Paper);

export default function CustomizedTables({ rows }) {
  const classes = useStyles();
  const { language } = useContext(languageContext);
  const [text, setText] = useState('');

  useEffect(() => {
    switch (language) {
      case 'ru':
        setText('Работы:');
        break;

      case 'bl':
        setText('Працы:');
        break;

      case 'en':
        setText('Works:');
        break;

      default:
        break;
    }
  }, [language]);
  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'left', paddingLeft: 25 }}>
        {text}
      </Typography>
      <TableContainer component={stylesPaper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.title}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
