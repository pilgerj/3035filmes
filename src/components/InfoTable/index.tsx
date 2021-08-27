import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Movie } from '../../types';

const useStyles = makeStyles({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px 0 10px',
    background: '#F5F5F5'
  },
  table: {
    minWidth: 265,
    maxWidth: 335,
    
  },
});

interface MovieInfoTableProps {
    movie: Movie;
};

const InfoTable: React.FC<MovieInfoTableProps> = ( {movie} ) => {
    const classes = useStyles();
    
    function createData(name: string, info: string) {
        return { name, info};
    }

    const rows = [
        createData('Título Original', movie.original_title ),
        createData('Lingua Original', movie.original_language.toUpperCase()),
        createData('Filme Adulto?', (movie.adult === false ? "Não" : "Sim")),
        createData('Média de Votos', movie.vote_average.toString()),
        createData('Contagem de Votos', movie.vote_count.toString() )
    ];
    
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InfoTable;
