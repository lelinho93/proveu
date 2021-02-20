import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{''}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function Inputs() {
      const [startDate, setStartDate] = useState("")
      const [startHour, setStartHour] = useState("")
      const [endDate, setEndDate] = useState("")
      const [endHour, setEndHour] = useState("")
      const [name, setName] = useState("")
  
      function handleStartDate(event) {
          setStartDate(event.target.value)
        }
    
    function handleStartHour(event) {
      setStartHour(event.target.value)
    }
  
    function handleEndDate(event) {
    setEndDate(event.target.value)
    }
  
    function handleEndHour(event) {
      setEndHour(event.target.value)
      }
  
    function  handleNameInput(event) {
      setName(event.target.value)
    }
  console.log("Hora de inicio:", startHour)
  console.log("Hora de fim:", endHour)
  console.log("Data de inicio", startDate);
  console.log("data de fim", endDate);
  console.log("Nome", name);
      
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccessTimeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Jornada de trabalho
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <TextField
                autoComplete="Nome"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome"
                value={name}
                onChange={handleNameInput}
                 autoFocus
                />
               <Grid item xs={12} sm={6}>
                  <TextField
                  id="date"
                  label="Dia de Entrada"
                  type="date"
                  value={startDate}
                  onChange={handleStartDate}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
              </Grid>     
              <Grid item xs={12} sm={6}>
                <TextField
                  id="time"
                  label="Horário"
                  type="time"
                  value={startHour}
                  onChange={handleStartHour}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  inputProps={{
                  step: 300,
                  }}
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
                  <TextField
                  id="date"
                  label="Dia de Saída"
                  type="date"  
                  value={endDate}
                  onChange={handleEndDate}              
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="time"
                  label="Horário"
                  type="time"
                  value={endHour}
                  onChange={handleEndHour}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  inputProps={{
                  step: 300,
                  }}
                />
              </Grid>     
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Calcular
            </Button>
            <Grid container justify="flex-end">
             
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }