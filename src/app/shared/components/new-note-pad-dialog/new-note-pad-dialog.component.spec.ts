import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewNotePadDialogComponent } from './new-note-pad-dialog.component';

describe('NewNotePadDialogComponent', () => {
  let component: NewNotePadDialogComponent;
  let fixture: ComponentFixture<NewNotePadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewNotePadDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewNotePadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
