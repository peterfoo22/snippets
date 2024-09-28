import {db} from "@/db";
import Link from "next/link";

//testing a push to the github, great this is pushing to my github

export default async function Home() {
	const snippets = await db.snippet.findMany();

	const allSnippets = snippets.map((snippet) => {
		return (
      <Link key={snippet.id} className="flex justify-between items-center p-2 border rounded" href={`/snippets/${snippet.id}`}>
        <div key={snippet.id}>
          <h1><b>{snippet.title}</b></h1>
        </div>
      </Link>
		);
	});
	return (
		<>	<div>Home Page - All Code Snippets</div>
			<div>{allSnippets}</div>
		</>
	);
}
