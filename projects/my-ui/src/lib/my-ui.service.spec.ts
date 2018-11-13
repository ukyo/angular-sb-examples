import { TestBed } from '@angular/core/testing';

import { MyUiService } from './my-ui.service';

describe('MyUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyUiService = TestBed.get(MyUiService);
    expect(service).toBeTruthy();
  });
});
