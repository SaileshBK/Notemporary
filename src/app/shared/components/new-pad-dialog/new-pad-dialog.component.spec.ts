import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPadDialogComponent } from './new-pad-dialog.component';

describe('NewPadDialogComponent', () => {
  let component: NewPadDialogComponent;
  let fixture: ComponentFixture<NewPadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPadDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
