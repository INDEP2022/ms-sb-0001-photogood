import { NestFactory, Reflector } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/core/interfaces/response.interceptor';


const docsEndpoint = '/api';
const title = 'Bienes Programacion API';
const description = 'API Gestionar el proceso de programación de bienes, su registro, captura de información de la transferente, emisora, participantes, bienes.';

function configureSwagger(app): void {
  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docsEndpoint, app, document);
}

async function bootstrap() {

  const app_port= process.env.HOST_PORT ? Number(process.env.HOST_PORT) : 3000;
  const ms_port = process.env.MS_PORT_MICRO ? Number(process.env.MS_PORT_MICRO) : 3001;

  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({ origin: '*' });

  const moduleRef = app.select(AppModule);
  const reflector = moduleRef.get(Reflector);
  app.useGlobalInterceptors(new ResponseInterceptor(reflector));

  configureSwagger(app);

  // La ruta en que se sirve la documentación
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host:'0.0.0.0',
      port:ms_port
    },
  });

  await app.startAllMicroservices();
  await app.listen(app_port);
  logger.log(
    `🚀 MS Audit service running on port ${app_port}}`,
  );
}
bootstrap();
