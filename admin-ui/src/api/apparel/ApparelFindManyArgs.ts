import { ApparelWhereInput } from "./ApparelWhereInput";
import { ApparelOrderByInput } from "./ApparelOrderByInput";

export type ApparelFindManyArgs = {
  where?: ApparelWhereInput;
  orderBy?: Array<ApparelOrderByInput>;
  skip?: number;
  take?: number;
};
