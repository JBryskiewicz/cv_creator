export type Information = {
	step: number;
	name: string;
	email: string;
	phoneNumber: string;
	education: Education[];
	experience: Experience[];
};

export type Experience = {
	name: string;
	period: string;
	description: string;
};

export interface Education extends Experience {
	type: "edu";
}

export type FormElementSubmitData = {
	[key: string]: string;
};

export type FormElementSubmitHandler = (data: FormElementSubmitData) => void;
