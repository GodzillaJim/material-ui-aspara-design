import { Grid } from "@material-ui/core";
import React from "react";
import StripImage from "../resources/strip.PNG";

const Strip = () => {
  return (
    <Grid item>
      <div className="d-flex justify-content-center">
        <img className="img-fluid" alt="Happy intro" src={StripImage} />
      </div>
    </Grid>
  );
};
export default Strip;
