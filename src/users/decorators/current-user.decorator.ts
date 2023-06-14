import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    // return request.currentUser;
     
    return {
      "id": 1,
      "email": "2abc@123as.com"
    };
  },
);
