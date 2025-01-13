"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ApiKey {
  id: string;
  provider: string;
  key: string;
  lastUsed: string;
  status: "active" | "inactive";
}

export default function ApiKeysPage() {
  const [provider, setProvider] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [savedKeys, setSavedKeys] = useState<ApiKey[]>([
    {
      id: "1",
      provider: "openai",
      key: "sk-...890",
      lastUsed: "2024-01-01",
      status: "active"
    },
    {
      id: "2",
      provider: "anthropic",
      key: "sk-...123",
      lastUsed: "2024-01-02",
      status: "active"
    }
  ]);

  const handleSave = () => {
    if (!provider || !apiKey) {
      toast.error("请填写所有必填字段");
      return;
    }

    const newKey: ApiKey = {
      id: Math.random().toString(36).substr(2, 9),
      provider,
      key: `${apiKey.substring(0, 3)}...${apiKey.substring(apiKey.length - 3)}`,
      lastUsed: new Date().toISOString().split('T')[0],
      status: "active"
    };

    setSavedKeys([...savedKeys, newKey]);
    setProvider("");
    setApiKey("");
    toast.success("API密钥已保存");
  };

  const toggleKeyStatus = (id: string) => {
    setSavedKeys(savedKeys.map(key => {
      if (key.id === id) {
        return {
          ...key,
          status: key.status === "active" ? "inactive" : "active"
        };
      }
      return key;
    }));
    toast.success("状态已更新");
  };

  const deleteKey = (id: string) => {
    setSavedKeys(savedKeys.filter(key => key.id !== id));
    toast.success("API密钥已删除");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">API密钥管理</h1>
        <Button variant="outline">查看使用文档</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>添加新的API密钥</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={provider} onValueChange={setProvider}>
            <SelectTrigger>
              <SelectValue placeholder="选择AI服务商" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="openai">OpenAI</SelectItem>
              <SelectItem value="anthropic">Anthropic</SelectItem>
              <SelectItem value="google">Google PaLM</SelectItem>
            </SelectContent>
          </Select>
          
          <Input
            type="password"
            placeholder="输入API密钥"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          
          <Button onClick={handleSave}>保存API密钥</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>已保存的API密钥</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>服务商</TableHead>
                <TableHead>密钥</TableHead>
                <TableHead>最后使用</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {savedKeys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="font-medium">{key.provider}</TableCell>
                  <TableCell>{key.key}</TableCell>
                  <TableCell>{key.lastUsed}</TableCell>
                  <TableCell>
                    <Badge variant={key.status === "active" ? "default" : "secondary"}>
                      {key.status === "active" ? "启用" : "禁用"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleKeyStatus(key.id)}
                      >
                        {key.status === "active" ? "禁用" : "启用"}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteKey(key.id)}
                      >
                        删除
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}