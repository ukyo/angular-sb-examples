import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStoriesComponent } from './btn-stories.component';

describe('BtnStoriesComponent', () => {
  let component: BtnStoriesComponent;
  let fixture: ComponentFixture<BtnStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
