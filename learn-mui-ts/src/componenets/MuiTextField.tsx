import { TextField, Stack } from "@mui/material";

export const MuiTextField = () => {
    return (
        <div>
            <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                    <TextField label='Name' variant="outlined"/>
                    <TextField label='Name' variant="filled"/>
                    <TextField label='Name' variant="standard"/>
                </Stack>
            </Stack>
        </div>
    );
}