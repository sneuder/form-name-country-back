import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [UsersModule, CountriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
