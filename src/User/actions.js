// actions.js
export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  