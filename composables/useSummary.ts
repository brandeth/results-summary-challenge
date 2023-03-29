import data from "./summaryData";

type SummaryItem = {
  category: string;
  icon: string;
  score: number;
}

type Summary = {
  summaryItems: SummaryItem[];
}


export const useSummary = (): Summary => {
  return {
    summaryItems: [...data.summary]
  };
};
