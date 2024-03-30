import { ApparelTypeWhereInput } from "./ApparelTypeWhereInput";
import { ApparelTypeOrderByInput } from "./ApparelTypeOrderByInput";

export type ApparelTypeFindManyArgs = {
  where?: ApparelTypeWhereInput;
  orderBy?: Array<ApparelTypeOrderByInput>;
  skip?: number;
  take?: number;
};
