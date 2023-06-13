import AuthService from "../src/services/authService";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  describe("login", () => {
    it("should return a token when username and password are valid", async () => {
      const username = "user1";
      const password = "password1";

      const token = await authService.login(username, password);

      expect(token).toEqual(expect.any(String));
    });
  });
});
