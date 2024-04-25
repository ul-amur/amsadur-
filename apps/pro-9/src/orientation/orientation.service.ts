import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrientationServiceBase } from "./base/orientation.service.base";

@Injectable()
export class OrientationService extends OrientationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
