import { MainCategoryWhereInput } from "./MainCategoryWhereInput";
import { MainCategoryOrderByInput } from "./MainCategoryOrderByInput";

export type MainCategoryFindManyArgs = {
  where?: MainCategoryWhereInput;
  orderBy?: Array<MainCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
