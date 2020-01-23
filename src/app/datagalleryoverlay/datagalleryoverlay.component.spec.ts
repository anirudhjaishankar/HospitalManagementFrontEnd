import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagalleryoverlayComponent } from './datagalleryoverlay.component';

describe('DatagalleryoverlayComponent', () => {
  let component: DatagalleryoverlayComponent;
  let fixture: ComponentFixture<DatagalleryoverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagalleryoverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagalleryoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
