import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersComponent } from './update-pers.component';

describe('UpdatePersComponent', () => {
  let component: UpdatePersComponent;
  let fixture: ComponentFixture<UpdatePersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
