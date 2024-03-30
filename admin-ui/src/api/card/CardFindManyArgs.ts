import { CardWhereInput } from "./CardWhereInput";
import { CardOrderByInput } from "./CardOrderByInput";

export type CardFindManyArgs = {
  where?: CardWhereInput;
  orderBy?: Array<CardOrderByInput>;
  skip?: number;
  take?: number;
};
