import { getUserData } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const { userId } = auth();

  if (!userId) {
    return <p>You must be logged in to view this page.</p>;
  }

  const userData = await getUserData(userId);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">User Profile</h1>
      {userData ? (
        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
