import React from "react";
import { Grid, Container, Card, Typography, Button } from "@material-ui/core";
import { login as loginAction } from "../store/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <Grid>
      <Container>
        <Card style={{ marginTop: 50, padding: 40 }}>
          <Grid direction="row" container justify="space-evenly">
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                dispatch(loginAction());
              }}
            >
              <Typography>LOGIN</Typography>
            </Button>
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
};

export default Login;
