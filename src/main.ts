import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {

  const PORT = process.env.PORT || 8080

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Announcement platform')
    .setDescription('The server API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);


  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))

}

bootstrap();
