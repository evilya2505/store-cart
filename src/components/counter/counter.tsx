import { Button, ButtonGroup, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  decreaseItemToCart,
  increaseItemToCart,
} from "../../services/reducers/products";

import counterStyles from "./counter.module.css";

interface ICounterProps {
  id: number;
  count: number;
}

const Counter: React.FC<ICounterProps> = ({ id, count }): JSX.Element => {
  const dispatch = useDispatch();

  function increaseCount() {
    dispatch(increaseItemToCart(id));
  }

  function decreaseCount() {
    dispatch(decreaseItemToCart(id));
  }
  return (
    <ButtonGroup
      sx={{
        ".MuiButtonGroup-firstButton.Mui-disabled": { borderRight: "none" },
        ".MuiButtonGroup-firstButton": { borderRight: "none" },
        alignItems: "center",
      }}
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <Button
        className={counterStyles.button}
        disabled={count === 1}
        onClick={decreaseCount}
      >
        &#8722;
      </Button>
      <TextField
        sx={{
          ".MuiInputBase-input": {
            padding: "5px",
            width: "40px",
            height: "40px",
            boxSizing: "border-box",
            textAlign: "center",
          },
          padding: "0px",
        }}
        variant="standard"
        value={count}
        inputProps={{ readOnly: true }}
      />

      <Button
        className={counterStyles.button}
        disabled={count === 10}
        onClick={increaseCount}
      >
        &#43;
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
