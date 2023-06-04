import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { GraphQLClient } from 'graphql-request';
import { allCountries } from './queries/countries.query';
import { CountryOutput } from './dto/country.output';

@Injectable()
export class CountryService {
  private client;

  constructor() {
    this.client = new GraphQLClient(process.env.CLIENT_COUNTRY);
  }

  async getAll(): Promise<CountryOutput[]> {
    try {
      const { countries } = await this.client.request(allCountries);
      if (countries.length > 0) return countries;
      throw new NotFoundException('Countries not found');
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
