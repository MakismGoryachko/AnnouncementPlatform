import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/users/users.model';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    console.log(req.user)
    return req.user;
  },
);