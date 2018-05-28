import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ISectionDetails } from '../../../../models/section.details/section.details.model';

@Injectable()
export class DetailsService {
  constructor(private httpClient: HttpClient) { }

  public getSectionDetails(sectionId: number): Observable<ISectionDetails> {
    return null;
  }
}
