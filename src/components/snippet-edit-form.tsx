"use client";
import { db } from "@/db";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

import { Snippet } from "@prisma/client";

interface SnippetEditPageFormProps {
  snippet: Snippet;
}

export default function SnippetEditPageForm({ snippet }: SnippetEditPageFormProps) {
	const [code, setCode] = useState<string | undefined>(snippet.code);
	
	const handleEditorChange = (value: string | undefined) => {
		if(!value) {
			return;
		}

		setCode(value);
		
	}


	return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        options={{
            minimap: {
            	enabled: false
            }
        }}
        defaultLanguage="javascript"
        defaultValue={snippet.code}
				onChange={handleEditorChange}
      />
    </div>
  );
}
