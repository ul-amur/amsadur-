import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StructureModuleBase } from "./base/structure.module.base";
import { StructureService } from "./structure.service";
import { StructureController } from "./structure.controller";
import { StructureResolver } from "./structure.resolver";

@Module({
  imports: [StructureModuleBase, forwardRef(() => AuthModule)],
  controllers: [StructureController],
  providers: [StructureService, StructureResolver],
  exports: [StructureService],
})
export class StructureModule {}
