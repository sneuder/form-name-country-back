import { Query, Resolver } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CountryOutput } from './dto/country.output';

@Resolver()
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(() => [CountryOutput], { name: 'countries' })
  getAllCountries(): Promise<CountryOutput[]> {
    return this.countryService.getAll();
  }
}
