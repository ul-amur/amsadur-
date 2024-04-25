import { Structure as TStructure } from "../api/structure/Structure";

export const STRUCTURE_TITLE_FIELD = "id";

export const StructureTitle = (record: TStructure): string => {
  return record.id?.toString() || String(record.id);
};
