export interface FAQTab {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  image: string;
  description: string;
  tabs: FAQTab[];
}
