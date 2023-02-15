export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.filter.value;
export const getIsLoadingStatus = state => state.contacts.isLoading;
export const getErrorStatus = state => state.contacts.error;