import axios from 'axios';

export function fetchDogs() {
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    dispatch(fetch_dogs_pending())
    return axios.get('https://dog.ceo/api/breeds/list/all').then(
      data => dispatch(fetch_dogs_success(data)), //succeed here is data
      error => dispatch(fetch_dogs_error(error)) // I have faild here is error
    );
  };
}


export function fetch_dogs_pending() {
  return { type: "FETCH_DOGS_PENDING" };
}

export function fetch_dogs_success(data) {
  return { type: "FETCH_DOGS_SUCCESS", data };
}

export function fetch_dogs_error(error) {
  return { type: "FETCH_DOGS_ERROR", error };
}