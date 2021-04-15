import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";
import { getListQueue, addNewCustomer, nextQueue } from "../store/actions";

import TableQueue from "./TableQueue";

const Queue = () => {
  const dispatch = useDispatch();

  const queue = useSelector((state) => state.queue);
  console.log("🚀 ~ file: Queue.js ~ line 21 ~ Queue ~ queue", queue);
  const [inService, setInService] = useState(null);
  const [nameNewCustomer, setNameNewCustomer] = useState(null);
  console.log(
    "🚀 ~ file: Queue.js ~ line 23 ~ Queue ~ nameNewCustomer",
    nameNewCustomer
  );
  // const [awaiting, setAwaiting] = useState(null);

  useEffect(() => {
    dispatch(getListQueue());
  }, []);

  // useEffect(() => {
  //   if (queue) {
  //     const tmpInService = queue.filter((el) => el.status === 1);
  //     setInService(tmpInService);
  //     const tmpAwaiting = queue.filter((el) => el.status === 0);
  //     setAwaiting(tmpAwaiting);
  //   }
  // }, [queue]);

  return (
    <Grid>
      <Container>
        <Card style={{ marginTop: 50, padding: 40 }}>
          <Grid direction="row" container justify="space-evenly"></Grid>
          <Grid
            justify="space-evenly"
            alignItems="flex-end"
            container
            direction="row"
          >
            <Typography align="justify">Customer name</Typography>
            <TextField
              onChange={(val) => {
                setNameNewCustomer(val.target.value);
              }}
              placeholder="any name"
              variant="filled"
            ></TextField>
            <Button
              onClick={() => {
                nameNewCustomer && dispatch(addNewCustomer(nameNewCustomer));
              }}
              variant="contained"
            >
              <Typography align="center">add in queue</Typography>
            </Button>
          </Grid>
          <Button
            onClick={() => {
              dispatch(nextQueue());
            }}
            variant="contained"
          >
            <Typography align="center">next</Typography>
          </Button>

          <Divider
            style={{ marginTop: 25, marginBottom: 25 }}
            variant="middle"
          />

          <Grid container justify="center">
            <Grid md={8}>{queue && <TableQueue rows={queue} />}</Grid>
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
};

export default Queue;
