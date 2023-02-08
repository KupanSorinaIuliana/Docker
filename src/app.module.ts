import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeaTrackerModule } from './ideaTracker/idea-tracker.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/soa', { useNewUrlParser: true }),
      IdeaTrackerModule,
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..','build'),
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
