import { useEffect } from "react";
import { useDispatch } from "../../services/hooks";
import { getProducts } from "../../services/actions/products";
import Main from "../main/main";
import appStyles from "./app.module.css";

function App() {
  const dispatch = useDispatch();

  // Получение товаров
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <Main />
    </div>
  );
}

export default App;
