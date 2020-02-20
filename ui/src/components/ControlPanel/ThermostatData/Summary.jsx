import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow)

const useStyles = makeStyles(theme => ({
  headingContainer: {
    padding: theme.spacing(2, 0)
  },
  tableContainer: {
    maxWidth: '700px'
  },
  table: {
    width: '100%'
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

const Summary = ({ data, dateRange }) => {
  const classes = useStyles()

  return (
    <Box className={classes.summaryContainer}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography align="left" className={classes.headingContainer}>
         { `Summary of data for period: ${dateRange}`}
        </Typography>
        <Table className={classes.table} aria-label="summary table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Temperature metric</StyledTableCell>
              <StyledTableCell align="right">Min (&deg;C)</StyledTableCell>
              <StyledTableCell align="right">Max(&deg;C)</StyledTableCell>
              <StyledTableCell align="right">Avg(&deg;C)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.min.actual.toFixed(2)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.max.actual.toFixed(2)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.avg.toFixed(2)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Summary
