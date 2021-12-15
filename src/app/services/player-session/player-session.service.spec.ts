import { TestBed } from '@angular/core/testing';

import { PlayerSessionService } from './player-session.service';

describe('PlayerSessionService', () => {
  let service: PlayerSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
