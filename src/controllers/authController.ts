import { Request, Response } from "express";
import authService from "../services/authService";

export const authController = {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const token = await authService.login(username, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};
