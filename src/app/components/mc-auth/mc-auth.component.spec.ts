import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McAuthComponent } from './mc-auth.component';

describe('McAuthComponent', () => {
  let component: McAuthComponent;
  let fixture: ComponentFixture<McAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
