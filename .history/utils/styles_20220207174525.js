import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#304FFE',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  section: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  footer: {
    textAlign: 'center',
  },
});
export default useStyles;
