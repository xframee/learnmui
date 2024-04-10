import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {

    const [countries, setCountries] = useState<string[]>([]);

    console.log({ countries });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Box width='250px'>
            <TextField
                label='Select Country'
                select value={countries}
                onChange={handleChange}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
            >
                <MenuItem value='DK'>Denmark</MenuItem>
                <MenuItem value='SE'>Sweden</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
            </TextField>
        </Box>
    )
};