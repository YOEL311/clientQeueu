import React, { useState, useEffect } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  TextField: {
    margin: 20,
  },
}));
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    user && history.push("/queue");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const style = useStyles();
  return (
    <Grid>
      <Container>
        <Card style={{ marginTop: 50, padding: 40 }}>
          <Grid container justify="center">
            <Grid
              item
              md={5}
              spacing={30}
              direction="column"
              container
              justify="space-evenly"
            >
              <TextField
                className={style.TextField}
                placeholder="userName"
                variant="filled"
                value={userName}
                onChange={(val) => {
                  setUserName(val.target.value);
                }}
              />
              <TextField
                className={style.TextField}
                placeholder="password"
                variant="filled"
                value={password}
                onChange={(val) => {
                  setPassword(val.target.value);
                }}
              />
              <Button
                className={style.TextField}
                color="primary"
                variant="outlined"
                onClick={() => {
                  dispatch(loginAction(userName, password));
                  setUserName("");
                  setPassword("");
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
