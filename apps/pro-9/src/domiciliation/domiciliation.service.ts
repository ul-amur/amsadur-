import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DomiciliationServiceBase } from "./base/domiciliation.service.base";

@Injectable()
export class DomiciliationService extends DomiciliationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
