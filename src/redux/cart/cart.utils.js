export const addItem = (itemToAdd, collection) => {
	const newItem = collection.find(existingItem => existingItem.id === itemToAdd.id);

	if (newItem) {
		return collection.map(item =>  (
					item.id === itemToAdd.id ? {...item, quantity: item.quantity+1} : item
				));
	} else {
		return [...collection, {...itemToAdd, quantity: 1}];
	};
};

export const removeItem = (itemToRemoveId, collection) => {
	return collection.filter(item => itemToRemoveId !== item.id)
};