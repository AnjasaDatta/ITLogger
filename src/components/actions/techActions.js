export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({
      type: 'GET_TECHS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
      payload: error.response.data,
    });
  }
};
export const addTechs = tech => async dispatch => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: 'ADD_TECHS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
      payload: error.response.data,
    });
  }
};
export const deleteTechs = id => async dispatch => {
  try {
    const res = await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });
    await res.json();
    dispatch({
      type: 'DELETE_TECHS',
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
      payload: error.response.data,
    });
  }
};
export const setLoading = () => {
  return {
    type: 'SET_LOADING',
  };
};
