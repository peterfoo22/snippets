'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);

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
   await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  revalidatePath('/');

  // Redirect the user back to the root route
  redirect('/');
}
