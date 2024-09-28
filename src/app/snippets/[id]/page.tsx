import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";

interface SnippetShowProps {
  params: {
    id: string;
  };
}

export default async function SnippetPage(props: SnippetShowProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <>
      <div className="m-4 flex justify-between items-center p-2 border rounded">
        <h1 className="text-2xl font-bold mb-4">{snippet?.title}</h1>
        <div className="flex space-x-1">
          <Link href={`/snippets/${snippet.id}/edit`}>
            <button className="m-1 flex justify-between items-center p-2 border rounded">
              Edit
            </button>
          </Link>
          <Link href={`/snippets/${snippet.id}/delete`}>
            <button className="m-1 flex justify-between items-center p-2 border rounded">
              Delete
            </button>
          </Link>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded overflow-x-scroll">
        <code>{snippet?.code}</code>
      </pre>
    </>
  );
}
