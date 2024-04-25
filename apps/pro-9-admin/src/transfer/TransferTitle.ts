import { Transfer as TTransfer } from "../api/transfer/Transfer";

export const TRANSFER_TITLE_FIELD = "id";

export const TransferTitle = (record: TTransfer): string => {
  return record.id?.toString() || String(record.id);
};
