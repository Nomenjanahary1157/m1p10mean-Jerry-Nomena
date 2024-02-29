import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersComponent } from './delete-pers.component';

describe('DeletePersComponent', () => {
  let component: DeletePersComponent;
  let fixture: ComponentFixture<DeletePersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
