import { Dial } from "../dial/Dial";
import { Domiciliation } from "../domiciliation/Domiciliation";
import { Transfer } from "../transfer/Transfer";
import { Structure } from "../structure/Structure";

export type Employee = {
  contacts?: Array<Dial>;
  createdAt: Date;
  domiciliation?: Domiciliation | null;
  email: string;
  id: string;
  relocation?: Transfer | null;
  structure?: Structure | null;
  updatedAt: Date;
};
