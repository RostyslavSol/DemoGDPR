import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ISection } from "../../models/dashboard/section.model";
import { ApiFactoryService } from "../services/api.factory/api.factory.service";
import { Injectable } from "@angular/core";

@Injectable()
export class SectionsResolver implements Resolve<ISection[]> {

  constructor(private _apiService: ApiFactoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISection[]> {
    return this._apiService.getSections();
  }
}
