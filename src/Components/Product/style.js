import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
      width: 350,
      height: 480,
      margin:  '2vw',
      background: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 15px 15px 5px rgba(0,0,0,0.4)',
    },
    media: {
      width:300,
      height: 400,
      width: '100%',
      objectFit: 'contain',
      objectPosition: 'center',
    },
  });