describe("Login API", () => {
  it("should return a JWT token when given correct username and password", async () => {
    const mockRequest = {
      body: {
        username: "user",
        password: "password",
      },
    };

    const mockResponse = {
      json: jest.fn(),
    };

    const expectedToken = "yourjwttoken";
    authService.login = jest.fn().mockResolvedValue(expectedToken);

    await authController.login(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({ token: expectedToken });
  });

  it("should return a 401 error when given incorrect username and password", async () => {
    const mockRequest = {
      body: {
        username: "wronguser",
        password: "wrongpassword",
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    authService.login = jest.fn().mockResolvedValue(null);

    await authController.login(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Incorrect username or password",
    });
  });
});
