
const initialState = {
  fetching: false,
  data: null,
  error: null
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DOGS_PENDING":
      return {
        fetching: true,
        data: null,
        error: null
      };

    case "FETCH_DOGS_SUCCESS":
      return {
        fetching: false,
        data: action.data,
        error: null
      };

    case "FETCH_DOGS_ERROR":
      return {
        fetching: false,
        data: null,
        error: action.error
      };

    default:
      return state;
  }
}
