import { push } from "connected-react-router";

/**
 * Action Creator for confirmation page
 */

export const navToHomePageAsync = () => {
    return dispatch => {
      return setTimeout(() => {
        dispatch(push('/'));
      }, 3000);
    }
  }


  export const navToHomePage = () => {
    return dispatch => {
        dispatch(push('/'));
    }
  }