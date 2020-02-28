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
  Paper,
} from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#373737',
    color: '#f5f5f5',
    fontSize: 18,
  },
  body: {
    fontSize: 18,
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
    minWidth: '90%',
  },
});

const stylesPaper = withStyles(theme => ({
  root: {
    width: '90%',
    margin: '0 auto',
  },
}))(Paper);

export default function CustomizedTables({ rows }) {
  const classes = useStyles();
  const { language } = useContext(languageContext);
  const [text, setText] = useState([]);

  useEffect(() => {
    switch (language) {
      case 'ru':
        setText(['Работы', 'Год']);
        break;

      case 'bl':
        setText(['Працы', 'Год']);
        break;

      case 'en':
        setText(['Works', 'Year']);
        break;

      default:
        break;
    }
  }, [language]);

  return (
    <>
      <TableContainer component={stylesPaper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{text[0]}</StyledTableCell>
              <StyledTableCell align="right">{text[1]}</StyledTableCell>
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
