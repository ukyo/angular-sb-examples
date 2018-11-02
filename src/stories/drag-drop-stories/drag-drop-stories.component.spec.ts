import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropStoriesComponent } from './drag-drop-stories.component';

describe('DragDropStoriesComponent', () => {
  let component: DragDropStoriesComponent;
  let fixture: ComponentFixture<DragDropStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
