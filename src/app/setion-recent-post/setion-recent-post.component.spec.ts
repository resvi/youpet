import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionRecentPostComponent } from './setion-recent-post.component';

describe('SetionRecentPostComponent', () => {
  let component: SetionRecentPostComponent;
  let fixture: ComponentFixture<SetionRecentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetionRecentPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionRecentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
