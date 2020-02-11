// import SettingInnerForm from './UserSettingInnerForm';
//
// const SettingForm = withFormik({
//   mapPropsToValues() {
//     return {
//       title: '',
//       body: ''
//     }
//   },
//   validationSchema: yup.object().shape({
//     title: yup.string().max(100, 'タイトルは100文字以内で入力してください').required('タイトルは必須項目です'),
//     body: yup.string().max(200, '本文は200文字以内で入力してください').required('本文は必須項目です')
//   }),
//   handleSubmit: (payload, { props, resetForm, setSubmitting }) => {
//     props.handleSubmit(payload);
//     resetForm();
//     setSubmitting(false);
//   }
// })(SettingInnerForm);
//
// export default SettingForm;
