export interface User {
  name: string;
  email: string;
  emailVerified: boolean;
  password: string;
  avatar?: string;
  addresses?: string[];
  isActivated: boolean;
  role: string;
  lastLogin?: Date;
  twoFactorSecret?: string;
  twoFactorEnabled: boolean;
  resetPasswordOTP: String;
  resetPasswordOTPExpires: Date;
  isDeleted: boolean;
  deletedAt?: Date;
  reasonForDeletion?: string[];
  awayDateStart?: Date;
  awayDateEnd?: Date;
  preferences: {
    currency: string;
    language: string;
    theme: string;
  };
  socialMedia?: {
    facebook?: string;
    x?: string;
    linkedin?: string;
    instagram?: string;
  };
  notificationSettings: {
    email: boolean;
    push: boolean;
  };
  googleId?: string;
  discordId: string;
  appleId: string;
  authProvider: string;
  accessToken: string;
  refreshToken: string;
  tokenExpiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
