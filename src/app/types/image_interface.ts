export interface Images {
  userId: string;
  name: string;
  url: string;
  isDeleted: boolean;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
