import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('API') // Tag for Swagger UI
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Returns a hello message' }) // Summary for the endpoint
  @ApiResponse({ status: 200, description: 'The hello message' }) // Response description
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
