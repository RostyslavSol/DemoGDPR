export interface ISummaryItem {
  isSuccess:  boolean;
  text:       string;
}

export interface IReport {
  sectionId: string;
  summary: ISummaryItem[];
}
