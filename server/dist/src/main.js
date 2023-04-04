"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const appModule_1 = require("./appModule");
async function bootstrap() {
    const app = await core_1.NestFactory.create(appModule_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map