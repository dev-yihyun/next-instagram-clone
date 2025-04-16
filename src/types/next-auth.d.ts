import { AuthUser } from "@/model/user";
import "next-auth";

declare module "next-auth" {
    interface Session {
        user: AuthUser;
    }
}
