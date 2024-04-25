import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DomiciliationModuleBase } from "./base/domiciliation.module.base";
import { DomiciliationService } from "./domiciliation.service";
import { DomiciliationController } from "./domiciliation.controller";
import { DomiciliationResolver } from "./domiciliation.resolver";

@Module({
  imports: [DomiciliationModuleBase, forwardRef(() => AuthModule)],
  controllers: [DomiciliationController],
  providers: [DomiciliationService, DomiciliationResolver],
  exports: [DomiciliationService],
})
export class DomiciliationModule {}
