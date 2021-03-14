
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '10px',
    
  },
  text: {
    fontFamily: 'Cabin',
    fontWeight: '400',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    fontFamily: 'Cabin',
    backgroundColor: '#b68973'
  },
  buttonClear:{
    fontFamily: 'Cabin',
    backgroundColor: '#eabf9f'
  },
}));