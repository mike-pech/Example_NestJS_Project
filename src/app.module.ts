import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PromoModule } from './promo/promo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PromoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
