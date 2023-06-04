import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  country: string;
}
