import { User } from "src/app/entities/user.model";

export interface UserInterface {
    getAllUser();
    creatUser(user: User);
    updateUser(user: User);
    deleteUser(userPhoneNumber: string)
}
