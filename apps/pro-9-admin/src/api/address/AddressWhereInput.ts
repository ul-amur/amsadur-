import { StringFilter } from "../../util/StringFilter";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";

export type AddressWhereInput = {
  id?: StringFilter;
  principalAddresses?: DomiciliationWhereUniqueInput;
  secondaryAddresses?: TransferWhereUniqueInput;
};
