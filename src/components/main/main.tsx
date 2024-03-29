import { Grid, Paper, Typography } from "@mui/material";
import CartTable from "../cart-table/cart-table";
import { useSelector } from "../../services/hooks";

import mainStyles from "./main.module.css";

interface IMainProps {}
const Main: React.FC<IMainProps> = (): JSX.Element => {
  const total = useSelector((store) => store.products.totalSum);

  return (
    <main>
      <Typography className={mainStyles.title} variant="h4" gutterBottom>
        Корзина
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Paper>
            <CartTable />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={mainStyles.paper}>
            <Typography className={mainStyles.price} variant="h6">
              Итого:
            </Typography>
            <Typography className={mainStyles.price} variant="h6">
              {total}&nbsp;руб.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
};

export default Main;
