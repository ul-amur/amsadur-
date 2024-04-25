import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrientationModuleBase } from "./base/orientation.module.base";
import { OrientationService } from "./orientation.service";
import { OrientationController } from "./orientation.controller";
import { OrientationResolver } from "./orientation.resolver";

@Module({
  imports: [OrientationModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrientationController],
  providers: [OrientationService, OrientationResolver],
  exports: [OrientationService],
})
export class OrientationModule {}
