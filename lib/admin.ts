import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2fY5aXca9mOaWW9PMLXtpZL8gM2"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
