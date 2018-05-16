import { IExample } from "./example.model";
import { IAnswer } from "./answer.model";
import { IReference } from "./reference.model";

export interface IQuestion {
  title:          string;
  invalidExample: IExample;
  validExample:   IExample;
  info:           string;
  answers:        IAnswer[];
  references:     IReference[];
  index:          number;
}
