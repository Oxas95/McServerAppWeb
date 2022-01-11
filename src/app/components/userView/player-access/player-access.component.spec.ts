import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAccessComponent } from './player-access.component';

describe('PlayerAccessComponent', () => {
  let component: PlayerAccessComponent;
  let fixture: ComponentFixture<PlayerAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
