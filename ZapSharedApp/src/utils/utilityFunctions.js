export const getResponseError = response => {
  if (!response) return 'Failed!';

  const {
    data: { errors },
  } = response;

  if (errors && errors.length) {
    console.log(errors);
    return 'Error!';
  }

  return 'Failed!';
};
