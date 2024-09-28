import { db } from "@/db";
import {notFound} from "next/navigation";
import SnippetEditPageForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id  = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id
    }
  })

  if(!snippet) {  
   return notFound();
  }

    return (
        <div>
          <SnippetEditPageForm snippet={snippet} />
        </div>
    );

}