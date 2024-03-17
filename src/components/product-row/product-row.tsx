import {
  Avatar,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch } from "../../services/hooks";
import { removeItemFromCart } from "../../services/reducers/products";
import { TProduct } from "../../utils/types";
import Counter from "../counter/counter";

import productRowStyles from "./product-row.module.css";

interface IProductRowProps {
  product: TProduct;
}

const ProductRow: React.FC<IProductRowProps> = ({ product }): JSX.Element => {
  const dispatch = useDispatch();
  const [isDescriptionExpanded, setDescriptionExpanded] =
    useState<boolean>(false);

  function onDelete() {
    dispatch(removeItemFromCart(product.id));
  }

  const toggleDescription = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <TableRow
      key={product.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        padding="none"
        component="th"
        scope="row"
        className={`${productRowStyles.tableCell} ${productRowStyles.itemInfo}`}
      >
        <Avatar
          alt={product.title}
          src={product.image}
          className={productRowStyles.image}
        />
        <div>
          <Typography variant="h6" className={productRowStyles.title}>
            {product.title}
          </Typography>
          <Typography
            variant="body1"
            onClick={toggleDescription}
            className={`${productRowStyles.description} ${
              isDescriptionExpanded && productRowStyles.descriptionExpanded
            }`}
          >
            {product.description}
          </Typography>
        </div>
      </TableCell>
      <TableCell
        padding="none"
        align="right"
        className={productRowStyles.tableCell}
      >
        <Counter id={product.id} count={product.count} />
      </TableCell>
      <TableCell
        padding="none"
        align="right"
        className={productRowStyles.tableCell}
      >
        <Typography variant="body1">{product.price}&nbsp;&#8381;</Typography>
      </TableCell>
      <TableCell padding="none" className={productRowStyles.tableCell}>
        <Tooltip title="Удалить">
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
