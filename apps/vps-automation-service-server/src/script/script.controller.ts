import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScriptService } from "./script.service";
import { ScriptControllerBase } from "./base/script.controller.base";

@swagger.ApiTags("scripts")
@common.Controller("scripts")
export class ScriptController extends ScriptControllerBase {
  constructor(protected readonly service: ScriptService) {
    super(service);
  }
}
