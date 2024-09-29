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