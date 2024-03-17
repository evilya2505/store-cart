import productsData from "../utils/products.json";
import { TProduct } from "./types";

const fakeDatabase: { products: TProduct[] } = {
  products: productsData,
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
