import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/create-answer.dto';
import { UUID } from 'crypto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';

@ApiTags('Answers')
@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  findAll() {
    return this.answerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.answerService.findOne(id);
  }

  @Get('form/:id')
  findAllByFormId(@Param('id') id: UUID) {
    return this.answerService.findAllByFormId(id);
  }

  @Get('question/:id')
  findAllByQuestionId(@Param('id') id: UUID) {
    return this.answerService.findAllByQuestionId(id);
  }

  @Get('user/:id')
  findAllAnsweredFormByUserId(@Param('id') id: UUID) {
    return this.answerService.findAnsweredFormsByUserId(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answerService.update(id, updateAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.answerService.remove(id);
  }
}
