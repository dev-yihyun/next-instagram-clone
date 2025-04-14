import { User } from "@/model/user";
import "next-auth";

declare module "next-auth" {
    interface Session {
        user: User;
    }
}
