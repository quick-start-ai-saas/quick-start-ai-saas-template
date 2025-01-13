"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Template } from "@/types";

interface TemplateEditorProps {
  template: Template | null;
}

export function TemplateEditor({ template }: TemplateEditorProps) {
  const [name, setName] = useState(template?.name ?? "");
  const [description, setDescription] = useState<string>(template?.description || "");
  const [content, setContent] = useState<string>(template?.content || "");
  const [category, setCategory] = useState<string>(template?.category || "");
  const [variables, setVariables] = useState<string[]>(template?.variables ?? []);
  const [newVariable, setNewVariable] = useState("");
  const [previewData, setPreviewData] = useState<Record<string, string>>({});

  useEffect(() => {
    if (template) {
      setName(template.name);
      setDescription(template.description || "");
      setContent(template.content);
      setCategory(template.category || "");
      setVariables(template.variables || []);
      setPreviewData({});
    }
  }, [template]);

  const handleAddVariable = () => {
    if (newVariable && !variables.includes(newVariable)) {
      setVariables([...variables, newVariable]);
      setNewVariable("");
    }
  };

  const handleRemoveVariable = (variable: string) => {
    setVariables(variables.filter(v => v !== variable));
  };

  const handleSave = () => {
    if (!name || !content) {
      toast.error("请填写必要字段");
      return;
    }
    // TODO: 实现保存逻辑
    toast.success("模板已保存");
  };

  const handlePreview = () => {
    let previewContent = content;
    Object.entries(previewData).forEach(([key, value]) => {
      previewContent = previewContent.replace(new RegExp(`{{${key}}}`, 'g'), value);
    });
    // TODO: 实现预览逻辑
    toast.info("预览功能开发中");
  };

  if (!template) {
    return (
      <Card className="p-6">
        <div className="text-center text-muted-foreground">
          请选择要编辑的模板
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <Tabs defaultValue="edit" className="space-y-4">
        <TabsList>
          <TabsTrigger value="edit">编辑</TabsTrigger>
          <TabsTrigger value="preview">预览</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">模板名称</label>
              <Input
                placeholder="输入模板名称"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">分类</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="选择分类" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="客服">客服</SelectItem>
                  <SelectItem value="营销">营销</SelectItem>
                  <SelectItem value="技术">技术</SelectItem>
                  <SelectItem value="其他">其他</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">描述</label>
            <Textarea
              placeholder="输入模板描述"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">变量</label>
            <div className="flex space-x-2">
              <Input
                placeholder="添加变量 (例如: name)"
                value={newVariable}
                onChange={(e) => setNewVariable(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddVariable()}
              />
              <Button onClick={handleAddVariable}>添加</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {variables.map((variable) => (
                <Badge
                  key={variable}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleRemoveVariable(variable)}
                >
                  {variable} ×
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">内容</label>
            <Textarea
              placeholder="输入模板内容，使用 {{变量名}} 插入变量"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px] font-mono"
            />
          </div>
        </TabsContent>

        <TabsContent value="preview" className="space-y-4">
          <div className="grid gap-4">
            {variables.map((variable) => (
              <div key={variable} className="space-y-2">
                <label className="text-sm font-medium">{variable}</label>
                <Input
                  placeholder={`输入 ${variable} 的值`}
                  value={previewData[variable] || ''}
                  onChange={(e) => setPreviewData({
                    ...previewData,
                    [variable]: e.target.value
                  })}
                />
              </div>
            ))}
          </div>

          <div className="p-4 border rounded-lg bg-muted">
            <pre className="whitespace-pre-wrap">
              {content.replace(/{{(\w+)}}/g, (match, variable) => 
                previewData[variable] || match
              )}
            </pre>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2 mt-4">
        <Button variant="outline" onClick={handlePreview}>
          生成结果
        </Button>
        <Button onClick={handleSave}>保存更改</Button>
      </div>
    </Card>
  );
}