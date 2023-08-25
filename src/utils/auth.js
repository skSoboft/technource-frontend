const USER_ROLES = {
    USER: 'user',
    EDITOR: 'editor',
    ADMIN: 'admin',
  };
  
  const TOKEN_KEY = 'jwtToken';
  
  const auth = {
    login: (username, password) => {
      
      const users = [
        { id: 1, username: 'user', password: 'user', role: USER_ROLES.USER },
        { id: 2, username: 'editor', password: 'editor', role: USER_ROLES.EDITOR },
        { id: 3, username: 'admin', password: 'admin', role: USER_ROLES.ADMIN },
      ];
  
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
  
      if (user) {
        localStorage.setItem(TOKEN_KEY, user.role);
        return user.role;
      } else {
        throw new Error('Invalid credentials');
      }
    },
  
    logout: () => {
      localStorage.removeItem(TOKEN_KEY);
    },
  
    getAuthToken: () => {
      return localStorage.getItem(TOKEN_KEY);
    },
  
    getUserRole: () => {
      const token = auth.getAuthToken();
      switch (token) {
        case USER_ROLES.USER:
          return USER_ROLES.USER;
        case USER_ROLES.EDITOR:
          return USER_ROLES.EDITOR;
        case USER_ROLES.ADMIN:
          return USER_ROLES.ADMIN;
        default:
          return null;
      }
    },
  
    isAuthenticated: () => {
      return !!auth.getAuthToken();
    },
  
    hasAccess: (requiredRoles) => {
      const userRole = auth.getUserRole();
      return requiredRoles.includes(userRole);
    },
  };
  
  export default auth;
  