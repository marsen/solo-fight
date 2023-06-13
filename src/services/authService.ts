type User = {
  username: string;
  password: string;
};

export type TAuthService = {
  login(username: string, password: string): Promise<string | null>;
};

class AuthService {
  async login(username: string, password: string): Promise<string | null> {
    // 模擬從資料庫中獲取使用者資料
    const user: User | undefined = undefined;

    // 如果使用者存在且密碼正確，回傳 JWT token
    if (user && user.password === password) {
      const token = "yourjwttoken!";
      return token;
    } else {
      // 否則回傳 null
      return null;
    }
  }
}

export default AuthService;
