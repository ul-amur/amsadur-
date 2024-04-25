import { Dial } from "../dial/Dial";
import { Domiciliation } from "../domiciliation/Domiciliation";
import { Transfer } from "../transfer/Transfer";
import { Structure } from "../structure/Structure";

export type Employee = {
  birthCountry: string | null;
  birthDate: Date | null;
  birthName: string | null;
  birthPlace: string | null;
  contacts?: Array<Dial>;
  createdAt: Date;
  domiciliation?: Domiciliation | null;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  names: string | null;
  nationality: string | null;
  relocation?: Transfer | null;
  sex?: "Homme" | "Femme" | "Inconnu" | null;
  structure?: Structure | null;
  updatedAt: Date;
};
