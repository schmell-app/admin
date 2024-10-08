import { QuestionDislikeGroup } from "@app/enums";

export interface TaskFilterMenu {
  priority: string[];
  status: string[];
  category: string[];
  responsible: string;
  page: number;
}

export interface ContactFilterMenu {
  acceptedTerms: boolean;
  type: string[];
  email: string;
  page: number;
}

export interface QuestionFilterMenu {
  questionSearch?: string;
  questionType?: string;
  page: number;
  hasDislikes: QuestionDislikeGroup;
  dislikesGreaterThan?: number;
}
