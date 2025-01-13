"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

export default function ProfilePage() {
  const { toast } = useToast();
  
  // This would typically come from your auth context or API
  const initialUser = {
    name: "张三",
    email: "zhang@example.com",
    image: "/avatars/01.png",
    role: "用户",
    joinDate: "2024-01-01"
  };

  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('image/')) {
      toast({
        title: "错误",
        description: "请上传图片文件",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically upload the image to your server/storage
    // For now, we'll just create a local URL
    const imageUrl = URL.createObjectURL(file);
    setUser(prev => ({ ...prev, image: imageUrl }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to update the user profile
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      toast({
        title: "成功",
        description: "个人资料已更新",
      });
    } catch (error) {
      toast({
        title: "错误",
        description: "更新失败，请重试",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">个人资料</h1>
      
      <form onSubmit={handleSubmit} className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>基本信息</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="avatar-upload"
                  onChange={handleImageUpload}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('avatar-upload')?.click()}
                >
                  更换头像
                </Button>
              </div>
            </div>
            
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">姓名</Label>
                <Input
                  id="name"
                  value={user.name}
                  onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label>角色</Label>
                <div className="text-sm text-muted-foreground">{user.role}</div>
              </div>
              
              <div className="grid gap-2">
                <Label>加入时间</Label>
                <div className="text-sm text-muted-foreground">{user.joinDate}</div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "保存中..." : "保存更改"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
