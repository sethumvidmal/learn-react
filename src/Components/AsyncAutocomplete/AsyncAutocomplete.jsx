import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function AsyncAutocomplete() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOptions = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setOptions(data.users || []);
    } catch (e) {
      console.error(e.message);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open && options.length === 0) {
      fetchOptions();
    }
  }, [open]);

  return (
    <Autocomplete
      open={open}
      fullWidth
      size="small"
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionLabel={(option) => option.firstName}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label="Select User"
          fullWidth
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps?.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  );
}
