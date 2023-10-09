import Http from "./Http";

export default class ProductService extends Http{
    static async getAllProduct(type:string) {
    try {
      return await this.get(`/products?populate=*&filters[type][$eqi]=${type}`);
    } catch (e) {
      console.error("get product error", e);
    }
  }

  static async getProductById(id:number){
    try {
      return await this.get(`/products/${id}?populate=*`)
    } catch (error) {
      console.error("error get product by id",error);
    }
  }
}