import { ModelPropertyWhereInput } from "./ModelPropertyWhereInput";
import { ModelPropertyOrderByInput } from "./ModelPropertyOrderByInput";

export type ModelPropertyFindManyArgs = {
  where?: ModelPropertyWhereInput;
  orderBy?: Array<ModelPropertyOrderByInput>;
  skip?: number;
  take?: number;
};
