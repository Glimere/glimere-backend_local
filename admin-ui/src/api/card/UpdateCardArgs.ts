import { CardWhereUniqueInput } from "./CardWhereUniqueInput";
import { CardUpdateInput } from "./CardUpdateInput";

export type UpdateCardArgs = {
  where: CardWhereUniqueInput;
  data: CardUpdateInput;
};
