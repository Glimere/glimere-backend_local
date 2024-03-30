import { SubCategoryWhereInput } from "./SubCategoryWhereInput";
import { SubCategoryOrderByInput } from "./SubCategoryOrderByInput";

export type SubCategoryFindManyArgs = {
  where?: SubCategoryWhereInput;
  orderBy?: Array<SubCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
