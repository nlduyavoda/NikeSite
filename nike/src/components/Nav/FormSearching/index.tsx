import { Grid } from "@mui/material";
import "./index.scss";
import Search from "../../Search/index";
import { Heart } from "../../icon/heart";
import { Cart } from "../../icon/cart";
function FormSearching() {
  return (
    <>
      <div className="input-icons">
        <Grid container>
          <Grid xs={8} className="Search">
            <Search />
          </Grid>
          <Grid xs={2} className="Heart">
            <Heart />
          </Grid>
          <Grid xs={2} className="Cart">
            <Cart />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default FormSearching;
