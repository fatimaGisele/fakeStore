import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
      width: '90%',
      margin:  '2vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      background: 'rgba( 109, 233, 205, 0.25 )',
      backdropFilter:' blur( 4px )',
      borderRadius: '10px',
      border: '1px solid rgba( 255, 255, 255, 0.18 )'
    },
    media: {
      justifyContent:'flex-start',
      alignItems:'start',
      width: '100%',
      margin: '2vw',
      height: 400,
      backgroundSize: 'contain'
    },
    content:{
      alignItems:'center',
      justifyContent: 'space-around'
    }
  });