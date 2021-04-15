import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { login as loginAction } from "../store/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  //   const listFavorites = useSelector(
  //     (state) => state.preferUser.listFavorites
  //   );
  //   const [listFavoritesInfo, setListFavoritesInfo] = React.useState<string[]>(
  //     []
  //   );

  // React.useEffect(() => { }

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
              <Typography>hgjkhg</Typography>
            </Button>
            <Typography>hgjkhg</Typography>
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
};

export default Login;
