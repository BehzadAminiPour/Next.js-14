import Link from "next/link";

const links = [
  { label: "client", href: "/client" },
  { label: "drinks", href: "/drinks" },
  { label: "tasks", href: "/tasks" },
  { label: "query", href: "/query" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar max-w-6xl mx-auto px-8 flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js 14
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
