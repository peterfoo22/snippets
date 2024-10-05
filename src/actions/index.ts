<<<<<<< HEAD
'use server'

import { db } from "@/db"

export async function editSnippet(formData: FormData) {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    const snippet = await db.snippet.update({
      where: {
        id
      },
      data: {
        title,
        code
      }
    });
    return snippet
}
=======
'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect('/');
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  return {
    message: 'Title must be longer',
  };
  // Check the user's inputs and make sure they're valid
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  if(typeof title !== 'string' || title.length < 3 ){
    return {
      message: 'Title must be longer',
    };
  }

  if(typeof code !== 'string' || code.length < 3 ){
    return {
      message: 'Code must be longer',
    };
  }

  // Create a new record in the database
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  // Redirect the user back to the root route
  redirect('/');
}
>>>>>>> 53073a9d8bdd7181b212117ccb86f5cf966b7de6
