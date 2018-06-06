import { IQuestion } from "../../models/interview/question.model";
import { Injectable } from "@angular/core";
import { ApiFactoryService } from "../services/api.factory/api.factory.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class QuestionResolver implements Resolve<IQuestion> {

  constructor(private _apiService: ApiFactoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IQuestion> {
    const sectionId  = Number(route.paramMap.get('sectionId'));
    const questionId = Number(route.paramMap.get('sectionId'));

    return this._apiService.getQuestion(sectionId, questionId);
  }
}
