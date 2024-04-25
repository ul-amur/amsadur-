import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "complement";

export const AddressTitle = (record: TAddress): string => {
  return record.complement?.toString() || String(record.id);
};
