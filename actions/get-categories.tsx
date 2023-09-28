import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categoreis`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  console.log(res.json());

  return res.json();
};
export default getCategories;
