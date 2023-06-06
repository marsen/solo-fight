import { Request, Response } from "express";
import AuthService from "../services/authService";

export const authController = {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const token = await authService.login(username, password);
      res.json({ token });
    } catch (error) {
      if (error.message === "Unauthorized")
        res.status(401).json({ message: error.message });
      else res.status(500).json({ message: "Something went wrong" });
    }
  },
};
