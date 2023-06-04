import { join } from 'path';

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CountryModule } from './country/countries.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(process.env.DB_HOST),
    CountryModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
