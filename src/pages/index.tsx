import { GetServerSideProps } from "next";
import { Microphone } from "../../model/Microphone";
import { openDB } from "../openDB";
import Link from "next/link";

export interface IndexProps {
  mircophones: Microphone[];
}

export default function Home({ mircophones }: IndexProps) {
  return (
    <div>
      <h2>Trang chu</h2>
      <Link href="/people">
        <a>Go to People Page</a>
      </Link>
      <pre>{JSON.stringify(mircophones, null, 4)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const db = await openDB();
  const mircophones = await db.all("select * from microphone");
  await new Promise((x) => {
    setTimeout(x, 3000);
  });
  return { props: { mircophones } };
};
