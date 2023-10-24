export type Information = {
  step: number;
  name: string;
  email: string;
  phoneNumber: string;
  education: Education[];
  experience: Experience[];
};

export type Education = {
  name: string;
  period: string;
  description: string;
};

export interface Experience extends Education {}
