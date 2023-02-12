import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../Utils/Constants";
import { SearchBar } from ".";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} /><h1 className="my_tube">Mytube</h1>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;