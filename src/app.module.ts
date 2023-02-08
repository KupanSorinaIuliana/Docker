import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeaTrackerModule } from './ideaTracker/idea-tracker.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://sorina:%40N!r0%2410%2B1@bigdata.41058td.mongodb.net/test', { useNewUrlParser: true }),
      IdeaTrackerModule,
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..','build'),
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
