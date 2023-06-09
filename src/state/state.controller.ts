import { Controller, Get } from '@nestjs/common';
import { StateEntity } from 'src/state/entities/state.entity';
import { StateService } from 'src/state/state.service';

@Controller('state')
export class StateController {
  constructor (
    private readonly stateService: StateService,
  ) {}

  @Get()
  async getAllState(): Promise<StateEntity[]> {
    return this.stateService.getAllState();
  }
}
