import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ children }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{children}</Button>
    </Stack>
  );
}
