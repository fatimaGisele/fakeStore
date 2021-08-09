import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
      width: 250,
      height: 350,
      margin:  '2vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      background: 'rgba( 238,238,228, 0.25 )', 
      backdropFilter:' blur( 4px )',
      borderRadius: '10px',
      border: '1px solid rgba( 255, 255, 255, 0.18 )'
    },
    media: {
      justifyContent: 'start',
      width: '100%',
      height: 200,
      backgroundSize: 'contain',
      margin: '5px'
    },
    content:{
      justifyContent: 'end'
    }
  });