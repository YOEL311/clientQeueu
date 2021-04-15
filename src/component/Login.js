import React from "react";
import {
  Grid,
  Container,
  Card,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { login as loginAction } from "../store/actions";
import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  TextField: {
    margin: 20,
  },
}));
const Login = () => {
  const dispatch = useDispatch();

  const style = useStyles();
  return (
    <Grid>
      <Container>
        <Card style={{ marginTop: 50, padding: 40 }}>
          <Grid container justify="center">
            <Grid
              md={5}
              // alignContent="center"
              spacing={30}
              direction="column"
              container
              justify="space-evenly"
            >
              <TextField
                className={style.TextField}
                onChange={(val) => {}}
                placeholder="userName"
                variant="filled"
              />
              <TextField
                className={style.TextField}
                onChange={(val) => {}}
                placeholder="password"
                variant="filled"
              />
              <Button
                className={style.TextField}
                color="primary"
                variant="outlined"
                onClick={() => {
                  dispatch(loginAction());
                }}
              >
                <Typography>LOGIN</Typography>
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
};

export default Login;
