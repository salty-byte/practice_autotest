// import React from 'react';
// import { Form } from 'formik';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
//
// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   textField: {
//     margin: theme.spacing(1),
//   },
// }));
//
// const SettingInnerForm = ({
//   values,
//   errors,
//   touched
// }) => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Form>
//         <div>
//           <TextField
//             value = {values.title}
//             label = "表示名"
//             type = "text"
//             name = "title"
//             className={classes.textField}
//           />
//         </div>
//         <div>
//           <TextField
//             value = {values.body}
//             name = "body"
//             rows = "5"
//             className={classes.textField}
//           />
//         </div>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           size="large"
//           className={classes.button}
//           startIcon={<SaveIcon />}
//         >
//           保存
//         </Button>
//       </Form>
//     </div>
//   )
// }
//
// export default SettingInnerForm;
