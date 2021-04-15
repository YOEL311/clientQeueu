import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Container,
  Card,
  Typography,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";
import {
  getListQueue,
  addNewCustomer,
  nextQueue,
  resetTable,
} from "../store/actions";
import TableQueue from "./TableQueue";

const Queue = () => {
  const dispatch = useDispatch();

  const queue = useSelector((state) => state.queue);
  const [nameNewCustomer, setNameNewCustomer] = useState(null);

  useEffect(() => {
    dispatch(getListQueue());
  }, []);

  useEffect(() => {
    queue && queue.sort((a, b) => a.id - b.id);
  }, [queue]);

  return (
    <Grid>
      <Container>
        <Card style={{ marginTop: 50, padding: 40 }}>
          <Grid direction="row" container justify="space-between">
            <Button
              onClick={() => {
                dispatch(nextQueue());
              }}
              variant="contained"
            >
              <Typography align="center">next</Typography>
            </Button>

            <Button
              onClick={() => {
                dispatch(resetTable());
              }}
              variant="contained"
            >
              <Typography color="error">RESET TEBLE</Typography>
            </Button>
          </Grid>

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
              variant="standard"
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
