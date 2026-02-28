class User {
  getUser() {
    return {
      id: Math.random().toString(36).substring(2, 15),
      sessionId: Math.random().toString(36).substring(2, 15),
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
    };
  }
}

export { User }; // Named export
