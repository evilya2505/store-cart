import { TProduct } from "./types";
import productsData from "../utils/products.json";

// Добавление к мок-данным поля count, примерный перевод цены в рубли и округление в большую сторону
const productsWithCount = productsData.map((product) => ({
  ...product,
  price: Math.ceil(product.price * 90),
  count: 1,
}));

const fakeDatabase: { products: TProduct[] } = {
  products: productsWithCount,
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

class FakeApi {
  async _getRequestResult<T>(data: T): Promise<T> {
    await delay(500); // Имитация задержки сети
    return data;
  }

  async getProducts(): Promise<TProduct[]> {
    return this._getRequestResult(fakeDatabase.products as TProduct[]);
  }
}

const fakeApi = new FakeApi();

export default fakeApi;
