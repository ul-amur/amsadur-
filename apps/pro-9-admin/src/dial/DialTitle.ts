import { Dial as TDial } from "../api/dial/Dial";

export const DIAL_TITLE_FIELD = "id";

export const DialTitle = (record: TDial): string => {
  return record.id?.toString() || String(record.id);
};
