import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropCheveuxComponent } from './dragdrop-cheveux.component';

describe('DragdropCheveuxComponent', () => {
  let component: DragdropCheveuxComponent;
  let fixture: ComponentFixture<DragdropCheveuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragdropCheveuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragdropCheveuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
