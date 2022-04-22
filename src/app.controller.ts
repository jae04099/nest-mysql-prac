import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //이걸 적어야지 컨트롤러 역할을 한다고 볼 수 있음
export class AppController {
  constructor(private readonly appService: AppService) {}

}