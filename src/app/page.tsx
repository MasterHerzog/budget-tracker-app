import GuestView from "@/components/ui/guestView";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if(!user){
    return <GuestView />;
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple budget tracker application.</p>
    </div>
  );
}
