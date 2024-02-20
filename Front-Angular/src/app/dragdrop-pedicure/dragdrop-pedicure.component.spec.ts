import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropPedicureComponent } from './dragdrop-pedicure.component';

describe('DragdropPedicureComponent', () => {
  let component: DragdropPedicureComponent;
  let fixture: ComponentFixture<DragdropPedicureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragdropPedicureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragdropPedicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
