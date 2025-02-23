import Link from "next/link";

const menuItems = [{ label: "Home", path: "/" }];

export const Navbar = () => {
  return (
    <header className="my-10 flex justify-between items-center">
      <div className="text-3xl font-bold cursor-default manrope">
        <span className="text-indigo-800 dark:text-indigo-400">Makan</span> D
      </div>
      <ul className="list-none m-0 p-0 text-lg">
        {menuItems.map((item) => (
          <li key={item.path} className="inline ml-8">
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
