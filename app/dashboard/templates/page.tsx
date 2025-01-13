"use client";

import { TemplateEditor } from "@/components/templates/editor";
import { TemplateList } from "@/components/templates/list";
import { Template } from "@/types";
import { useState } from "react";

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Template Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <TemplateList
            onSelect={setSelectedTemplate}
            selectedId={selectedTemplate?.id ?? null}
          />
        </div>
        <div className="lg:col-span-2">
          <TemplateEditor template={selectedTemplate} />
        </div>
      </div>
    </div>
  );
}