import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/actions/navbar-action";

export const revalidate = 0;

const Navbar = async () => {
  // const URL = `${process.env.NEXT_PUBLIC_API_URL}/categoreis`;
  // const res = await fetch(URL);
  // console.log(res.json());
  // const categories = await getCategories();
  // console.log(categories);

  const categories = [
    {
      id: "1",
      name: "Shoes",
      billboard: "Shoes",
    },
    {
      id: "2",
      name: "Watch",
      billboard: "Watch",
    },
    {
      id: "1",
      name: "Fashion",
      billboard: "Fashion",
    },
    {
      id: "1",
      name: "Electronic",
      billboard: "Electronic",
    },
  ];

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
