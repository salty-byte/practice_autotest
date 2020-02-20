import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 10,
    marginLeft: 10
  },
  formControl: {
    minWidth: 250
  },
}));

const RedListSimpleSearchForm = (data) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    'category': data.defaultCategory
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    // TODO validation
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl className={classes.formControl}>
        <InputLabel id="category-label">カテゴリ</InputLabel>
        <Select
          labelId="category-label"
          name="category"
          value={state.category}
          onChange={handleChange("category")}
          autoWidth
        >
          <MenuItem value="0"><em>すべて</em></MenuItem>
          {
            data.categories.map(v => (
              <MenuItem
                key={v.id}
                value={v.id}
                style={{color:v.color}}
              >
                {v.name}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        検索
      </Button>
    </form>
  )
}

export default RedListSimpleSearchForm;
