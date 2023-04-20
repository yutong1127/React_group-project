import {
  Button,
  TextField,
  Box,
  Grid,
  Link,
  Radio,
  useTheme,
  InputAdornment,
  FormControlLabel,
  Typography
} from '@mui/material';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function LoginBox() {
  const theme = useTheme();

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/...');
//   };
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component='h1'
          variant='h5'
          sx={{
            color: theme.palette.info.dark,
          }}
        >
          Welcome!
        </Typography>

        <Box component='form' noValidate sx={{ mt: 1 }}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <VisibilityOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  pl: '10px',
                }}
              >
                <FormControlLabel
                  control={
                    <Radio
                      value='remember'
                      color='primary'
                      sx={{
                        fontSize: '0.1rem',
                        padding: '2px',
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: '0.9rem', color: '#1876D1' }}>
                      Remember me
                    </Typography>
                  }
                />
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                // onClick={handleClick}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginBox;
