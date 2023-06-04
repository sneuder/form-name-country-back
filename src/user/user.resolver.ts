import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { UseFilters } from '@nestjs/common';
import { User } from './dto/user.schema';
import { UserService } from './user.service';
import { UserInput } from './dto/user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  getAllUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Query(() => User, { name: 'user' })
  getOneUser(
    @Args('userId', { type: () => String }) UserId: string,
  ): Promise<User> {
    return this.userService.getOne(UserId);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateOneUser(
    @Args('userId', { type: () => String }) UserId: string,
    @Args('userToUpdate', { type: () => UserInput })
    UserToUpdate: UserInput,
  ) {
    return this.userService.updateOne(UserId, UserToUpdate);
  }

  @Mutation(() => User, { name: 'removeUser' })
  @UseFilters()
  removeOneUser(@Args('UserId', { type: () => String }) UserId: string) {
    return this.userService.removeOne(UserId);
  }
}
