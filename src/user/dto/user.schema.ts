import { ObjectType, Field } from '@nestjs/graphql';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User {
  @Prop({ required: true, type: String })
  @Field(() => String, { nullable: false })
  name: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
