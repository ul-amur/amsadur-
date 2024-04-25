import { Orientation as TOrientation } from "../api/orientation/Orientation";

export const ORIENTATION_TITLE_FIELD = "activity";

export const OrientationTitle = (record: TOrientation): string => {
  return record.activity?.toString() || String(record.id);
};
