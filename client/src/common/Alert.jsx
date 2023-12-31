import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Error = (props) => {
  const { title, variant, severity, message } = props;
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity} variant={variant}>
        <AlertTitle>{title}</AlertTitle>
        {typeof message === 'function' ? message(props) : message}
      </Alert>
    </Stack>
  );
};

export default Error;

Error.defaultProps = {
  severity: 'error',
  variant: 'filled',
  title: 'Error',
  message: 'Unexpected error occurred!',
};
