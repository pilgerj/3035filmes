import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import { Movie } from '../../types';
import { Container, InfoTableContainer } from './styles';
import InfoTable from '../InfoTable';

interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

interface MovieDialogProps {
  movie: Movie;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: 'orange',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: 'black',
    },
});

const StyledButton = styled(Button)`
    && {
        background-color: black;
        color: orange;
        border: 1px solid orange;
        width: 100px;
        
        &:hover {
          background: orange !important; 
          color: black;
          opacity: 1;
          transition: 0.3s;
        }

        @media(max-width: 767px) {
            font-size: 10px;
            padding: 5px;
            width: 80px;
            margin: 0 3px 0 3px;
        }
    }
`;

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),

  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const MovieDialog: React.FC<MovieDialogProps> = ({movie}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledButton onClick={handleClickOpen}>
        Ver mais
      </StyledButton>
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Container>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <h2>{movie.title}</h2>
          </DialogTitle>

          <DialogContent dividers>
            <img src={`https://image.tmdb.org/t/p/original/` + movie.poster_path} />            
            <p> {!movie.overview ? 'Não há sinopse disponível.' : movie.overview} </p>
            
            <InfoTableContainer>
              <InfoTable movie={movie}/>
            </InfoTableContainer>
            <h1>{ movie.vote_average }</h1>

          </DialogContent>
        </Container>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default MovieDialog;