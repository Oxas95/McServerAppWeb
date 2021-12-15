import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchServerComponent } from './launch-server.component';

describe('LaunchServerComponent', () => {
  let component: LaunchServerComponent;
  let fixture: ComponentFixture<LaunchServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
