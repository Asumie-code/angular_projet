import { TestBed } from '@angular/core/testing';

import { CrisisDetailResolverResolver } from './crisis-detail-resolver.resolver';

describe('CrisisDetailResolverResolver', () => {
  let resolver: CrisisDetailResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CrisisDetailResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
