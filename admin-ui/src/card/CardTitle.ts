import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "cardholderName";

export const CardTitle = (record: TCard): string => {
  return record.cardholderName?.toString() || String(record.id);
};
