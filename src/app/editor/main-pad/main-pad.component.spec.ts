import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPadComponent } from './main-pad.component';

describe('MainPadComponent', () => {
  let component: MainPadComponent;
  let fixture: ComponentFixture<MainPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
