import { WishlistItems as TWishlistItems } from "../api/wishlistItems/WishlistItems";

export const WISHLISTITEMS_TITLE_FIELD = "id";

export const WishlistItemsTitle = (record: TWishlistItems): string => {
  return record.id?.toString() || String(record.id);
};
