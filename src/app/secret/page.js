import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Secret() {
  const user = await currentUser();

  return (
    <h1 className="text-4xl m-4">
      This is secret content for {user?.firstName}!
    </h1>
  );
}
