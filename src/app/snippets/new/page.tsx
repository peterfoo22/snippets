import { db } from "@/db"
import { redirect } from "next/navigation"

export default function SnippetCreatePage(){

  async function createSnippet(formData: FormData) {
    
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code
      },
    });

    console.log(snippet);
    redirect(`/`);
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bond m-3">Create a New Snippet</h3>
        {/* First Input Field - Title */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label htmlFor="title" className="w-12"> Title</label>
            <input name="title" type="text" placeholder="Title" id="title" className="w-full border rounded p-2" />
          </div>
          {/* Second Input Field - Code */}
          <div className="flex gap-4"> 
            <label htmlFor="code" className="w-12">Code</label>
            <textarea name="code" placeholder="Code" id="code" className="w-full border rounded p-2" />
          </div>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
  )
}