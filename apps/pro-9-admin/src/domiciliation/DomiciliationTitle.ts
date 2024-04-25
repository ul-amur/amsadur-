import { Domiciliation as TDomiciliation } from "../api/domiciliation/Domiciliation";

export const DOMICILIATION_TITLE_FIELD = "id";

export const DomiciliationTitle = (record: TDomiciliation): string => {
  return record.id?.toString() || String(record.id);
};
