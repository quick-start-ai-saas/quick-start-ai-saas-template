"use client";

import { useState } from "react";
import { Template } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const defaultTemplates: Template[] = [
  {
    id: "1",
    name: "客服回复模板",
    description: "用于快速回复客户常见问题",
    category: "客服",
    content: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "2",
    name: "产品介绍模板",
    description: "介绍产品特性和优势",
    category: "营销",
    content: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "3",
    name: "技术文档模板",
    description: "API文档和技术说明",
    category: "技术",
    content: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

interface TemplateListProps {
  onSelect: (template: Template | null) => void;
  selectedId: string | null;
}

export function TemplateList({ onSelect, selectedId }: TemplateListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [templates, setTemplates] = useState<Template[]>(defaultTemplates);

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (template.description?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );

  const handleCreateNew = () => {
    const newTemplate: Template = {
      id: Math.random().toString(36).substr(2, 9),
      name: "新模板",
      description: "请编辑此模板",
      category: "其他",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTemplates([...templates, newTemplate]);
    onSelect(newTemplate);
  };

  return (
    <Card className="h-[calc(100vh-12rem)]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>提示词模板</CardTitle>
          <Button size="sm" onClick={handleCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            新建
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索模板..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8"
          />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-16rem)]">
          <div className="space-y-2">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedId === template.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                onClick={() => onSelect(template)}
              >
                <div className="font-medium">{template.name}</div>
                <div className={`text-sm ${
                  selectedId === template.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground"
                }`}>
                  {template.description}
                </div>
                <div className={`text-xs mt-1 ${
                  selectedId === template.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground"
                }`}>
                  {template.category}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
