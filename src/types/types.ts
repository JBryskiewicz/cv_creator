export type Information = {
  step: number;
  name: string;
  email: string;
  phoneNumber: string;
  education: Education[];
};

export type Education = {
  name: string;
  period: string;
  description: string;
};
