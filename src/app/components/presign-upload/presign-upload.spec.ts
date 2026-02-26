import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresignUpload } from './presign-upload';

describe('PresignUpload', () => {
  let component: PresignUpload;
  let fixture: ComponentFixture<PresignUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresignUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresignUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
