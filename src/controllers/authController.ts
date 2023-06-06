import { Request, Response } from "express";
import AuthService, { TAuthService } from "../services/authService";
class AuthController {
  authService: TAuthService;
  constructor(service: TAuthService) {
    this.authService = service;
  }
  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const token = await this.authService.login(username, password);
      res.json({ token });
    } catch (error) {
      if (error.message === "Unauthorized")
        res.status(401).json({ message: error.message });
      else res.status(500).json({ message: "Something went wrong" });
    }
  }
}
export default AuthController;
