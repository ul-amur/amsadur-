import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DialModuleBase } from "./base/dial.module.base";
import { DialService } from "./dial.service";
import { DialController } from "./dial.controller";
import { DialResolver } from "./dial.resolver";

@Module({
  imports: [DialModuleBase, forwardRef(() => AuthModule)],
  controllers: [DialController],
  providers: [DialService, DialResolver],
  exports: [DialService],
})
export class DialModule {}
