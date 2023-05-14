interface User {
  username: string;
  password: string;
}

class AuthService {
  async login(username: string, password: string): Promise<string | null> {
    // 模擬從資料庫中獲取使用者資料
    const user: User | undefined = await this.getUserByUsername(username);

    // 如果使用者存在且密碼正確，回傳 JWT token
    if (user && user.password === password) {
      const token = "yourjwttoken";
      return token;
    } else {
      // 否則回傳 null
      return null;
    }
  }

  private async getUserByUsername(username: string): Promise<User | undefined> {
    // 模擬從資料庫中獲取使用者資料
    const users: User[] = [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
      { username: "user3", password: "password3" },
    ];

    return users.find((user) => user.username === username);
  }
}

export default new AuthService();
