import { Request, Response } from "express";
import authService from "../src/services/authService";
import { authController } from "../src/controllers/authController";

describe("authController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {
      body: {
        username: "mark",
        password: "p@ssw0rd",
      },
    };
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  describe("login", () => {
    it("should return a JWT token when given valid username and password", async () => {
      const expectedToken = "yourjwttoken";
      authService.login = jest.fn().mockResolvedValue(expectedToken);

      await authController.login(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.json).toHaveBeenCalledWith({ token: expectedToken });
    });
  });
});
