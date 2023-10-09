import Http from "./Http";

export default class SubCategoryService extends Http{
    static async getSubCategoriesById(id:number) {
    try {
      return await this.get(`/sub-categories?filters[categories][id][$eq]=${id}`);
    } catch (e) {
      console.error("get product error", e);
    }
  }
}