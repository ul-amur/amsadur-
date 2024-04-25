import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";

export type AddressWhereInput = {
  complement?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  inseeCog?: StringNullableFilter;
  precision1?: StringNullableFilter;
  precision_2?: StringNullableFilter;
  principalAddresses?: DomiciliationWhereUniqueInput;
  secondaryAddresses?: TransferWhereUniqueInput;
  town?: StringNullableFilter;
};
