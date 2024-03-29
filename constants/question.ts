import { GroupSize, QuestionDislikeGroup } from "@app/enums";
import { SelectItem } from "@mantine/core";

export const GroupSizes = [
  { label: "Alle", value: GroupSize.All },
  { label: "S (0-8)", value: GroupSize.S },
  { label: "M (9-16)", value: GroupSize.M },
  { label: "L (17 og oppover)", value: GroupSize.L }
];

export const WeekNumbers: SelectItem[] = [
  { label: "Uke 1", value: "1" },
  { label: "Uke 2", value: "2" },
  { label: "Uke 3", value: "3" },
  { label: "Uke 4", value: "4" },
  { label: "Uke 5", value: "5" },
  { label: "Uke 6", value: "6" },
  { label: "Uke 7", value: "7" },
  { label: "Uke 8", value: "8" },
  { label: "Uke 9", value: "9" },
  { label: "Uke 10", value: "10" },
  { label: "Uke 11", value: "11" },
  { label: "Uke 12", value: "12" },
  { label: "Uke 13", value: "13" },
  { label: "Uke 14", value: "14" },
  { label: "Uke 15", value: "15" },
  { label: "Uke 16", value: "16" },
  { label: "Uke 17", value: "17" },
  { label: "Uke 18", value: "18" },
  { label: "Uke 19", value: "19" },
  { label: "Uke 20", value: "20" },
  { label: "Uke 21", value: "21" },
  { label: "Uke 22", value: "22" },
  { label: "Uke 23", value: "23" },
  { label: "Uke 24", value: "24" },
  { label: "Uke 25", value: "25" },
  { label: "Uke 26", value: "26" },
  { label: "Uke 27", value: "27" },
  { label: "Uke 28", value: "28" },
  { label: "Uke 29", value: "29" },
  { label: "Uke 30", value: "30" },
  { label: "Uke 31", value: "31" },
  { label: "Uke 32", value: "32" },
  { label: "Uke 33", value: "33" },
  { label: "Uke 34", value: "34" },
  { label: "Uke 35", value: "35" },
  { label: "Uke 36", value: "36" },
  { label: "Uke 37", value: "37" },
  { label: "Uke 38", value: "38" },
  { label: "Uke 39", value: "39" },
  { label: "Uke 40", value: "40" },
  { label: "Uke 41", value: "41" },
  { label: "Uke 42", value: "42" },
  { label: "Uke 43", value: "43" },
  { label: "Uke 44", value: "44" },
  { label: "Uke 45", value: "45" },
  { label: "Uke 46", value: "46" },
  { label: "Uke 47", value: "47" },
  { label: "Uke 48", value: "48" },
  { label: "Uke 49", value: "49" },
  { label: "Uke 50", value: "50" },
  { label: "Uke 51", value: "51" },
  { label: "Uke 52", value: "52" }
];

export const QuestionHasDislikes = [
  {
    label: "Vis alle",
    value: QuestionDislikeGroup.All
  },
  {
    label: "Med dislikes",
    value: QuestionDislikeGroup.Dislikes
  },
  {
    label: "Uten dislikes",
    value: QuestionDislikeGroup.NoDislikes
  }
];

export const fromDislikeGroupToBoolean = {
  [QuestionDislikeGroup.All]: undefined,
  [QuestionDislikeGroup.Dislikes]: true,
  [QuestionDislikeGroup.NoDislikes]: false
};
