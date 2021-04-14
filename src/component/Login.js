import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const Login = () => {
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
          <Grid direction="row" container justify="space-evenly"></Grid>
        </Card>
      </Container>
    </Grid>
  );
};

export default Login;
