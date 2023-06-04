import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './dto/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.UserModel.find();
  }

  async getOne(userId: string): Promise<User> {
    const foundUser = await this.UserModel.findOne({ userId });
    return this.UserExists(foundUser);
  }

  async createOne(newUser: User) {
    return this.UserModel.create(newUser);
  }

  async updateOne(userId: string, updateUser: User) {
    const updatedUser = await this.UserModel.findByIdAndUpdate(
      userId,
      updateUser,
      { new: true },
    );

    return this.UserExists(updatedUser);
  }

  async removeOne(userId: string) {
    const removedUser = await this.UserModel.findOneAndRemove({
      UserId: userId,
    });
    return this.UserExists(removedUser);
  }

  // handler exception
  UserExists(user: User): User {
    if (user) return user;
    throw new NotFoundException('This User was not found');
  }
}
