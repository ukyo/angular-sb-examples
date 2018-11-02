import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStoriesComponent } from './tab-stories.component';

describe('TabStoriesComponent', () => {
  let component: TabStoriesComponent;
  let fixture: ComponentFixture<TabStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
