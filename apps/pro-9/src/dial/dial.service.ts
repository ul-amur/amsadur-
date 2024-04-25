import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DialServiceBase } from "./base/dial.service.base";

@Injectable()
export class DialService extends DialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
