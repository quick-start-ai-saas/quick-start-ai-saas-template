'use client';

import { Card } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Sample data - replace with real data from your backend
const usageData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
];

const userActivityData = [
  { name: 'Mon', users: 20 },
  { name: 'Tue', users: 30 },
  { name: 'Wed', users: 45 },
  { name: 'Thu', users: 35 },
  { name: 'Fri', users: 50 },
];

const resourceUsageData = [
  { name: 'Storage', value: 400 },
  { name: 'CPU', value: 300 },
  { name: 'Memory', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Total Users</h3>
          <div className="text-3xl font-bold">1,234</div>
          <p className="text-sm text-gray-500">+12% from last month</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
          <div className="text-3xl font-bold">256</div>
          <p className="text-sm text-gray-500">Current active users</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">API Calls</h3>
          <div className="text-3xl font-bold">45.2K</div>
          <p className="text-sm text-gray-500">Last 24 hours</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Usage Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">User Activity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Resource Usage</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resourceUsageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {resourceUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">User Activity {i}</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
                <span className="text-blue-500">Details</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
