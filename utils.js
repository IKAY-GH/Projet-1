export const removeChildren = (element) => {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};
