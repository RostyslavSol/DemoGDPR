import { IAnnouncement } from "./announcement.model";
import { IOverviewItem } from "./overview.model";
import { IQuestion }     from "../interview/question.model";

export interface ISectionDetails {
  announcement:   IAnnouncement;
  overviews:      IOverviewItem[];
  questionnaire:  IQuestion[];
}
