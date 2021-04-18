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
import { toast } from "react-toastify";

const Queue = () => {
  const dispatch = useDispatch();

  const queue = useSelector((state) => state.queue);
  const [nameNewCustomer, setNameNewCustomer] = useState("");

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
              <Typography align="center">next queue</Typography>
            </Button>

            <Button
              onClick={() => {
                dispatch(resetTable());
              }}
              variant="contained"
            >
              <Typography color="error">RESET TABLE</Typography>
            </Button>
          </Grid>

          <Grid
            justify="flex-start"
            alignItems="flex-end"
            container
            direction="row"
          >
            <TextField
              onChange={(val) => {
                setNameNewCustomer(val.target.value);
              }}
              value={nameNewCustomer}
              placeholder="any name"
              variant="standard"
              style={{ paddingRight: 20 }}
            />
            <Button
              onClick={() => {
                if (nameNewCustomer.length > 0) {
                  dispatch(addNewCustomer(nameNewCustomer));
                  setNameNewCustomer("");
                } else {
                  toast.error("enter name");
                }
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
            <Grid>{queue && <TableQueue rows={queue} />}</Grid>
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
};

export default Queue;
