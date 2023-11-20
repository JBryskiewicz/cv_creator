import { Education, Experience } from "./types";

export const isEducation = (data: Education | Experience): data is Education => {
	if ((data as Education).type) {
		return true;
	}
	return false;
};
