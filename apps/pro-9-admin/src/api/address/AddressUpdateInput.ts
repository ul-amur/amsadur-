import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";

export type AddressUpdateInput = {
  principalAddresses?: DomiciliationWhereUniqueInput | null;
  secondaryAddresses?: TransferWhereUniqueInput | null;
};
