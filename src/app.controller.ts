import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  getHello(): string {    
    return this.appService.getHello();
  }

  @Get()
  @Render('index')
  root() {    
    console.log('index @ :: '+Date.now())
    return { message: 'Hello world! - Welcome to Home Tour..!!' };
  }

  @Get('/study')
  @Render('room')
  study() {
    console.log('room @ :: '+Date.now())
    return { location: 'You are in the Study Hall...!' };
  }

  @Get('/garden')
  @Render('room')
  garden() {
    console.log('garden @ :: '+Date.now())
    return { location: 'You are in the Garden...!' };
  }
}
