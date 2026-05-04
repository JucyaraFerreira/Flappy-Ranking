import Link from "next/link";

export default function UserPage() {
  return (
    <main>
      <h1>User Profile</h1>
      <p>Player information will appear here.</p>

      <Link href="/main-screen">Back</Link>
    </main>
  );
}