import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040 !important',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
      textDecoration: 'none',
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
