import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrientationWhereInput = {
  activity?: StringNullableFilter;
  geographicDomain?: StringNullableFilter;
  id?: StringFilter;
  structureCode?: StringNullableFilter;
  structureLabel?: StringNullableFilter;
};
