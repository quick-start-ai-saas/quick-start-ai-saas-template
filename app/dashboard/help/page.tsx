import { Heading } from "@/components/ui/heading"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="帮助与支持" description="获取使用帮助和支持服务" />
        <HelpCircle className="h-8 w-8 text-muted-foreground" />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">使用指南</h3>
            <p className="text-muted-foreground">
              了解平台的基本功能和使用方法
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">常见问题</h3>
            <p className="text-muted-foreground">
              查看常见问题解答和故障排除指南
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">联系支持</h3>
            <p className="text-muted-foreground">
              需要更多帮助？联系我们的支持团队
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
