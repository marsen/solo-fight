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
      json: jest.fn().mockResolvedValue("yourjwttoken"),
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

    it("should return 401 Unauthorized error when login fails", async () => {
      const error = new Error("Unauthorized");
      authService.login = jest.fn().mockRejectedValue(error);

      await authController.login(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Unauthorized",
      });
    });

    it("should return 500 Internal Server Error when server encounters an error", async () => {
      const error = new Error("Something went wrong");
      authService.login = jest.fn().mockRejectedValue(error);

      await authController.login(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Something went wrong",
      });
    });
  });
});
