import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GatewayModule } from './gateway/gateway.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const gateway = await NestFactory.create(GatewayModule);
  await gateway.listen(3010);
}
bootstrap();
