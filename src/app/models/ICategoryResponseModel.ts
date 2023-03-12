import { Category } from "./ICategory";
import { ResponseModel } from "./IResponseModel";

export interface CategoryResponseModel extends ResponseModel {
  data: Category[]
}
