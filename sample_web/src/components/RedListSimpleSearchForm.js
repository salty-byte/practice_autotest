import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(1),
  },
}));

const RedListSimpleSearchForm = ({
  values = {
    title: "",
  },
  errors,
  touched
}) => {
  const [age, setAge] = React.useState('');
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SearchIcon />}
        >
          検索
        </Button>
      </div>
    </div>
  )
}

export default RedListSimpleSearchForm;
