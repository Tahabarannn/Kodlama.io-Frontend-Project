import { Product } from "./IProduct";
import { ResponseModel } from "./IResponseModel";

export interface ProductResponseModel extends ResponseModel {
  data: Product[]
}
