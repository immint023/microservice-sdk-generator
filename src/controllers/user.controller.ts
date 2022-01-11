import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "../dto/create-user.dto";
import { TEST, TopicEnum } from "../enums/topic.enum";
import { CompanyModel } from "../models/company.model";
import { UserModel } from "../models/user.model";

export class Person {}

function Topic(value: string): MethodDecorator {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    MessagePattern(value)(target, propertyKey, descriptor);
  };
}

export class UserController {
  @Topic(TopicEnum.GET_USER)
  async getUser(
    a: string,
    @Payload("value") createUserDto: CreateUserDto
  ): Promise<UserModel[] | CompanyModel> {
    return [new UserModel()];
  }
}
