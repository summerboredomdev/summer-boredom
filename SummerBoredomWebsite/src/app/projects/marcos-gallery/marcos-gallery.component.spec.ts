import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcosGalleryComponent } from './marcos-gallery.component';

describe('MarcosGalleryComponent', () => {
  let component: MarcosGalleryComponent;
  let fixture: ComponentFixture<MarcosGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcosGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcosGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
