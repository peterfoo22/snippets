import { db } from "@/db";
import {notFound} from 'next/navigation'
interface SnippetShowProps {
  params: {
    id: string;
  }
}

export default async function SnippetPage(props: SnippetShowProps) {

  await new Promise (resolve => setTimeout(resolve, 2000));

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id)
    }
  });

  if(!snippet) {
    notFound()
  }

  return (
    <>
    <div className="m-4 items-center p-2 border rounded">
     <h1 className="text-2xl font-bold mb-4">{snippet?.title}</h1>
    </div>
    <div className="m-4 flex justify-between items-center">
      <button className="m-4 flex justify-between items-center p-2 border rounded">Edit</button>
      <button className="m-4 flex justify-between items-center p-2 border rounded">Delete</button>
    </div>
    <pre className="p-3 bg-gray-200 rounded overflow-x-scroll">
      <code>{snippet?.code}</code>
    </pre>
    </>
  );
} 