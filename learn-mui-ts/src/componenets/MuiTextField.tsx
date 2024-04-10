import { TextField, Stack, InputAdornment } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const MuiTextField = () => {
    return (
        <div>
            <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                    <TextField label='Name' variant="outlined" />
                    <TextField label='Name' variant="filled" />
                    <TextField label='Name' variant="standard" />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField label='Small secondary' size="small" color="secondary" />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField label='Form input' required />
                    <TextField
                        label='Password'
                        helperText='Do not share your password with anyone'
                        type='password'
                    />
                    <TextField
                        label='Password'
                        helperText='Do not share your password with anyone'
                        type='password'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <VisibilityOffIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>
            </Stack>
        </div>
    );
}