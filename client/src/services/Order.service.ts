import Http from "./Http";

export default class OrderService extends Http {
  static async getAllOrders(type: string) {
    try {
      return await this.get(`/products?populate=*&filters[type][$eqi]=${type}`);
    } catch (e) {
      console.error("get product error", e);
    }
  }

  static async getOrderById(id: number) {
    try {
      return await this.get(`/products/${id}?populate=*`);
    } catch (error) {
      console.error("error get product by id", error);
    }
  }

  static async postOrder(products: any) {
    try {
      return await this.post(`/orders`, {
        products,
      });
    } catch (error) {
      console.error("error post order");
    }
  }
}
