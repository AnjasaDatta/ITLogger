export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: 'GET_LOGS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
      payload: error.response.data,
    });
  }
};
export const addLogs = log => async dispatch => {
  try {
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: 'ADD_LOGS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
      payload: error.response.data,
    });
  }
};
export const deleteLogs = id => async dispatch => {
  try {
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });
    await res.json();
    dispatch({
      type: 'DELETE_LOGS',
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
      payload: error.response.data,
    });
  }
};
export const getCurrentLogs = log => async dispatch => {
  dispatch({ type: 'GET_CURRENT', payload: log });
};
export const updateLogs = log => async dispatch => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: 'UPDATE_LOGS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
      payload: error.response.data,
    });
  }
};
export const searchLogs = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: 'SEARCH_LOGS',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERROR',
      payload: err.response.statusText,
    });
  }
};
export const setLoading = () => {
  return {
    type: 'SET_LOADING',
  };
};
