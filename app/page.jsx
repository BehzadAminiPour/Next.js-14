import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-blue-700 text-4xl mb-4">Hello.I am back again.</h1>
      <Link href="/client" className="btn btn-primary btn-sm">
        Get Started
      </Link>
    </>
  );
}
