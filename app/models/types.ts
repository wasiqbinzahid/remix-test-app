export interface CreateItemPayload {
  name: string;
  age: number;
}
export interface ItemType extends CreateItemPayload {
  id: number;
}
export interface UserType {
  email: string;
  password: string;
}
