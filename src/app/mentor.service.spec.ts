import { TestBed, inject } from '@angular/core/testing';
import { MentorService } from './mentor.service';

describe('MentorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentorService]
    });
  });

  it('should ...', inject([MentorService], (service: MentorService) => {
    expect(service).toBeTruthy();
  }));
});
