export function phoneNumberValidator(field: string): boolean {
	const pattern: RegExp = /^(\d[-\s]?){8}\d$/;
	if (pattern.test(field)) {
		return true;
	}
	return false;
}

export function emailValidator(field: string): boolean {
	const pattern: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	if (pattern.test(field)) {
		return true;
	}
	return false;
}

export function dateValidator(field: string): boolean {
	const pattern: RegExp =
		/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.[1-9][0-9][0-9][0-9] - (0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.[1-9][0-9][0-9][0-9]$/;
	if (!pattern.test(field)) {
		return false;
	}
	return true;
}
