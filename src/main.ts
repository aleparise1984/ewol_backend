import { NestFactory } from "@nestjs/core";

import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
  });

  const config = new DocumentBuilder()
    .setTitle("API")
    .setDescription("AEPC API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
