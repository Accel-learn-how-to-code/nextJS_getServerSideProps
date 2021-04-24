import { GetServerSideProps } from "next";
import { openDB } from "../openDB";
import Link from "next/link";

export interface PeopleProps {
  names: string;
}

export default function People({ names }: PeopleProps) {
  return (
    <div>
      <h2>Trang chu</h2>
      <Link href="/">
        <a>Go to Main Page</a>
      </Link>
      <pre>{JSON.stringify(names, null, 4)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const names = [
    { name: "Long" },
    { name: "Huy" },
    { name: "Tu" },
    { name: "Thanh" },
    { name: "Tuan" },
  ];
  return { props: { names } };
};
