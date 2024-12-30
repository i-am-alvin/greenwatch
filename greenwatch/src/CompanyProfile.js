import React from 'react';
import { 
  Building2, MapPin, Users, TreePine, Scale, Briefcase,
  AlertTriangle, FileText, DollarSign, ChevronRight,
  Search, Bell, Activity, Eye, Home
} from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Line
} from 'recharts';

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 導航欄 */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-emerald-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  GreenWatchAI
                </span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {['儀表板', '企業列表', 'ESG評分', '新聞中心'].map((item, index) => (
                  <button key={index} className="text-gray-600 hover:text-emerald-600 font-medium">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜尋企業..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-[200px] text-sm"
                />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 麵包屑和頁面標題 */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Home className="h-4 w-4 mr-2" />
            <span>首頁</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>企業列表</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">綠色科技公司</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">公司概況</h1>
        </div>

        {/* 公司基本信息卡片 */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Building2 className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{companyInfo.name}</h2>
                <p className="text-gray-500 mb-4">{companyInfo.engName}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{companyInfo.headquarters}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{companyInfo.employees} 員工</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">科技產業</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">年收入 {companyInfo.revenue}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  ESG 評分: {esgScores.overall}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ESG 評分卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: '環境評分', score: esgScores.environmental, icon: TreePine, iconColor: 'text-emerald-600', bgColor: 'bg-emerald-500', decorationColor: 'bg-emerald-50' },
            { title: '社會評分', score: esgScores.social, icon: Users, iconColor: 'text-blue-600', bgColor: 'bg-blue-500', decorationColor: 'bg-blue-50' },
            { title: '治理評分', score: esgScores.governance, icon: Scale, iconColor: 'text-purple-600', bgColor: 'bg-purple-500', decorationColor: 'bg-purple-50' }
          ].map((item, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <span className="text-2xl font-bold">{item.score}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.bgColor}`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.decorationColor} rounded-full -mr-16 -mt-16 opacity-50`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 碳排放趨勢圖表 */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-medium">碳排放趨勢分析</h2>
              </div>
              <select className="px-4 py-2 rounded-lg border text-sm">
                <option>近5年</option>
                <option>近3年</option>
                <option>今年</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={carbonEmissionData}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis domain={[100, 170]} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#059669"
                    strokeWidth={2}
                    fill="url(#colorAmount)"
                    name="實際排放量"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#dc2626"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="減碳目標"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* 違規記錄和新聞摘要 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <h2 className="text-lg font-medium">違規記錄</h2>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">查看全部</button>
              </div>
              <div className="space-y-4">
                {violations.map((violation, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-medium text-red-600">{violation.type}</span>
                        <p className="text-sm text-gray-600 mt-1">{violation.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        violation.status === "已改善" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {violation.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{violation.date}</span>
                      <span>罰款金額: NT$ {violation.fine.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  <h2 className="text-lg font-medium">AI 新聞分析</h2>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">查看全部</button>
              </div>
              <div className="space-y-4">
                {newsDigest.map((news, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{news.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        news.sentiment === "positive"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                        {news.source}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{news.summary}</p>
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>{news.date}</span>
                      <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">閱讀更多</a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

// 模擬數據
const companyInfo = {
  name: '綠色科技公司',
  engName: 'Green Tech Inc.',
  headquarters: '台北市, 台灣',
  employees: '250',
  revenue: 'NT$ 1億'
};

const esgScores = {
  overall: '85',
  ranking: '第2名',
  improvement: '5%',
  environmental: 75,
  social: 80,
  governance: 90
};

const carbonEmissionData = [
  { year: '2019', amount: 150, target: 120 },
  { year: '2020', amount: 140, target: 115 },
  { year: '2021', amount: 130, target: 110 },
  { year: '2022', amount: 120, target: 100 },
  { year: '2023', amount: 100, target: 90 },
];

const violations = [
  { type: '環保法違規', description: '未依規定回報碳排放數據', date: '2024-01-15', fine: 50000, status: '已改善' },
  { type: '資源浪費', description: '未適當處理廢棄物', date: '2024-02-20', fine: 30000, status: '未改善' },
];

const newsDigest = [
  { title: '綠色科技公司獲得國際環保獎', summary: '因其在可再生能源方面的努力而受到表彰。', date: '2024-03-05', source: '綠色新聞', sentiment: 'positive', link: 'https://example.com/news1' },
  { title: 'ESG報告指出綠色科技公司需改善社會責任', summary: '報告中提到公司在社會責任方面的得分有所下降。', date: '2024-04-10', source: '商業日報', sentiment: 'negative', link: 'https://example.com/news2' },
];

// 將元件導出
export default CompanyProfile;
