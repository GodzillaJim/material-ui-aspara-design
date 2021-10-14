import React from "react";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import Strip from "../components/Strip";
import CandidatesTable from "../components/CandidatesTable";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
      marginLeft: theme.spacing(7)
    }
  }
}));
const FlowOne = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid className="my-3" justifyContent="center" container direction="row">
        <Strip />
      </Grid>
      <Grid justifyContent="left" container>
        <Grid item>
          <div className={classes.title}>
            <Typography style={{ width: "100%", left: "100px" }} variant="h6">
              Candidate Database
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid
        justifyContent="center"
        container
        direction="row"
        id="table-of-candidates-titles"
      >
        <Grid item>
          <CandidatesTable />
        </Grid>
      </Grid>
    </Container>
  );
};
export default FlowOne;
