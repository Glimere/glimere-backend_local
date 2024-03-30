import { MaterialWhereInput } from "./MaterialWhereInput";
import { MaterialOrderByInput } from "./MaterialOrderByInput";

export type MaterialFindManyArgs = {
  where?: MaterialWhereInput;
  orderBy?: Array<MaterialOrderByInput>;
  skip?: number;
  take?: number;
};
