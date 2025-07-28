import axios from "axios";
import { LoginData, AuthResponse } from "../types/authTypes";

export const authService = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await axios.post("/api/auth/login", data);
    return response.data;
  },
};
