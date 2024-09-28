import { db } from "@/db";
'use client';

import { snippet } from "@prisma/client";

interface SnippetEditPageFormProps {
    snippet: snippet
}

export default function SnippetEditPageForm({snippet}: SnippetEditPageFormProps) {
    return (
        <div>
            <h1>Edit Snippet which is a Client Component - {snippet.title}</h1>
        </div>
    )
} 


