import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiFactoryService } from "../services/api.factory/api.factory.service";
import { Injectable } from "@angular/core";
import { ISectionDetails } from "../../models/section.details/section.details.model";

@Injectable()
export class SectionDetailsResolver implements Resolve<ISectionDetails> {

  constructor(private _apiService: ApiFactoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISectionDetails> {
    const sectionId = Number(route.paramMap.get('sectionId'));
    return this._apiService.getSectionDetails(sectionId);
  }
}
