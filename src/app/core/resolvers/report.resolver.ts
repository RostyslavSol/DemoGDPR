import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IReport } from '../../models/report/report.model';
import { ApiFactoryService } from '../services/api.factory/api.factory.service';


@Injectable()
export class ReportResolver implements Resolve<IReport> {

  constructor(private _apiService: ApiFactoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReport> {
    const sectionId = Number(route.paramMap.get('sectionId'));

    return this._apiService.getReport(sectionId);
  }
}
