import { TestBed, inject } from '@angular/core/testing';

import { PortfolioCategoriesService } from './portfolio-categories.service';

describe('PortfolioCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioCategoriesService]
    });
  });

  it('should be created', inject([PortfolioCategoriesService], (service: PortfolioCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
