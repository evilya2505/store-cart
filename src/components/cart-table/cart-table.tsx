import {
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "../../services/hooks";
import ProductRow from "../product-row/product-row";

import cartTableStyles from "./cart-table.module.css";

interface ICartTableProps {}

const CartTable: React.FC<ICartTableProps> = (): JSX.Element => {
  const products = useSelector((store) => store.products.products);

  return (
    <TableContainer>
      <Table className={cartTableStyles.table} aria-label="cart">
        <TableHead>
          <TableRow>
            <TableCell padding="none" className={cartTableStyles.cell}>
              <Typography variant="body1">Товар</Typography>
            </TableCell>
            {[`Кол\u2011во`, "Цена"].map((item, index) => {
              return (
                <TableCell
                  padding="none"
                  key={index}
                  align="center"
                  className={cartTableStyles.cell}
                >
                  <Typography variant="body1">{item}</Typography>
                </TableCell>
              );
            })}
            <TableCell
              padding="none"
              align="center"
              className={cartTableStyles.cell}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length > 0 ? (
            <>
              {products.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell padding="none" className={cartTableStyles.cell}>
                <Typography variant="body1" className={cartTableStyles.text}>
                  Корзина пуста
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
