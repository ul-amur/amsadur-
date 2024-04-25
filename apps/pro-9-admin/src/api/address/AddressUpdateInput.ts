import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";

export type AddressUpdateInput = {
  complement?: string | null;
  country?: string | null;
  inseeCog?: string | null;
  precision1?: string | null;
  precision_2?: string | null;
  principalAddresses?: DomiciliationWhereUniqueInput | null;
  secondaryAddresses?: TransferWhereUniqueInput | null;
  town?: string | null;
};
