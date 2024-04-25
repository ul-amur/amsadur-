import { Dial as TDial } from "../api/dial/Dial";

export const DIAL_TITLE_FIELD = "value";

export const DialTitle = (record: TDial): string => {
  return record.value?.toString() || String(record.id);
};
