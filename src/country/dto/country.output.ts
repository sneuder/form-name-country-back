import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CountryOutput {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  country: string;
}
