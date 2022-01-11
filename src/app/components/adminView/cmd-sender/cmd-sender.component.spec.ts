import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdSenderComponent } from './cmd-sender.component';

describe('CmdSenderComponent', () => {
  let component: CmdSenderComponent;
  let fixture: ComponentFixture<CmdSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
