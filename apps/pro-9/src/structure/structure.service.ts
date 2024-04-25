import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StructureServiceBase } from "./base/structure.service.base";

@Injectable()
export class StructureService extends StructureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
