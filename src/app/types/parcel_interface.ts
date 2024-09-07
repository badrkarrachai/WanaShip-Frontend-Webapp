import { Address } from "cluster";
import { User } from "./user_interface";

export interface Parcel {
  userId: string;
  name: string;
  description?: string;
  price: number;
  images: string[];
  toAddress: string | Address;
  quantity: number;
  isActive: boolean;
  isDeleted: boolean;
  deletedAt?: Date;
  purchaseDate?: Date;
  reshipperId?: string | User;
  reshipperNote?: string;
  reshipperRecivedDate?: Date;
  reshipperSendDate?: Date;
  deliverdDate?: Date;
  reshipperRecivedQuantity?: number;
  status: string;
  trackingNumber: string;
  weight: number;
  createdAt: Date;
  updatedAt: Date;
  referenceId: string;
}
