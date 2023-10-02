import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-action";
import { ThemeToggle } from "./theme-toggle";

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
      billboard: {
        id: "1",
        label: "Shoes",
        imageUrl: "string",
      },
    },
    {
      id: "2",
      name: "Watch",
      billboard: {
        id: "2",
        label: "Watch",
        imageUrl: "string",
      },
    },
    {
      id: "3",
      name: "Fashion",
      billboard: {
        id: "3",
        label: "Fashion",
        imageUrl: "string",
      },
    },
    {
      id: "4",
      name: "Electronic",
      billboard: {
        id: "4",
        label: "Electronic",
        imageUrl: "string",
      },
    },
  ];

  return (
    <div className="border-b">
      <Container>
        <div className="relative justify-between px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <div className="flex">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">Store</p>
            </Link>
            <MainNav data={categories} />
          </div>
          <NavbarActions />
          <div className="ml-2">{/* <ThemeToggle /> */}</div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
