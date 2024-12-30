import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MoreVertical, 
  Heart, 
  Share2, 
  Home, 
  Search, 
  BarChart2, 
  User, 
  ChevronRight,
  Recycle,
  Timer,
  DollarSign,
  Award,
  Leaf
} from 'lucide-react';
import soapImage from './images/soap.jpeg';

const ProductDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md border-b">
        <button className="flex items-center p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-lg font-semibold">Green & Clean</div>
        <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreVertical className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-[60px]">
        {/* Product Image */}
        <div className="relative w-full bg-gray-50">
          <img
            src={soapImage}
            alt="乾燥花環保手工皂"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* 環保認證標章 */}
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-white/90 p-2 rounded-lg backdrop-blur-sm">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div className="bg-white/90 p-2 rounded-lg backdrop-blur-sm">
              <Leaf className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="relative -mt-6 p-4 bg-white rounded-t-3xl shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <h1 className="text-2xl font-bold">環保手工皂 - Green & Clean</h1>
            <div className="text-xl font-bold text-blue-600">NT$ 199</div>
          </div>
          
          {/* 快速資訊 */}
          <div className="flex gap-2 mb-4 text-sm">
            <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full">有機認證</span>
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">可回收包裝</span>
            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full">零廢棄製程</span>
          </div>
          
          {/* ESG Score */}
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-1.5 bg-green-100 rounded-full">
              <span className="text-green-800 font-medium">ESG Score: 85 / A級</span>
            </div>
          </div>

          {/* 環保效益指標 */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-blue-50 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="font-medium mb-1">碳排放</div>
              <div className="text-blue-700 font-semibold">減少 75%</div>
              <div className="text-xs text-gray-500">vs. 一般肥皂</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="font-medium mb-1">水足跡</div>
              <div className="text-blue-700 font-semibold">節省 60%</div>
              <div className="text-xs text-gray-500">vs. 一般肥皂</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="font-medium mb-1">社會貢獻</div>
              <div className="text-blue-700 font-semibold">5% 收益</div>
              <div className="text-xs text-gray-500">投入公益</div>
            </div>
          </div>

          {/* 產品生命週期 */}
          <div className="mb-6">
            <h2 className="font-semibold mb-3">產品生命週期影響</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Recycle className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <div className="font-medium">包裝 100% 可回收</div>
                  <div className="text-sm text-gray-600">使用可堆肥紙包裝，零塑膠</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Timer className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium">使用壽命約 45 天</div>
                  <div className="text-sm text-gray-600">正確使用可延長至 60 天</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <div className="text-left">
                  <div className="font-medium">長期環保效益</div>
                  <div className="text-sm text-gray-600">年省 1,200 元，減少 2.5kg 塑膠使用</div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h2 className="font-semibold mb-3 flex items-center justify-between">
                產地及供應鏈
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>生產國家</span>
                  <span className="font-medium text-gray-900">台灣</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>原料來源</span>
                  <span className="font-medium text-gray-900">非洲有機認證椰子油、天然香料</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>運輸里程</span>
                  <span className="font-medium text-gray-900">平均 &lt; 500 公里</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h2 className="font-semibold mb-3 flex items-center justify-between">
                環保認證資訊
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>有機認證</span>
                  <span className="font-medium text-green-600">USDA Organic</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>環保標章</span>
                  <span className="font-medium text-green-600">台灣環保標章</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>碳足跡認證</span>
                  <span className="font-medium text-green-600">ISO 14067</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h2 className="font-semibold mb-3 flex items-center justify-between">
                企業永續資訊
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>企業規模</span>
                  <span className="font-medium text-gray-900">中型企業 / 200+ 員工</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>年度永續投資</span>
                  <span className="font-medium text-green-600">NT$ 500萬</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>員工平均薪資</span>
                  <span className="font-medium text-blue-600">較產業高 15%</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">最新永續動態</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  更多消息
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4 text-sm">
                <div className="group bg-white rounded-xl p-3 hover:shadow-md transition-all">
                  <div className="flex gap-4 items-start">
                    <div className="w-20 h-20 rounded-lg flex-shrink-0 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                        alt="永續新聞圖片"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="font-medium text-gray-900">獲選 2023 永續企業獎</div>
                        <span className="flex-shrink-0 px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">最新</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">Green & Clean 以創新環保製程獲經濟部肯定，成為台灣美妝保養品產業的標竿企業</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>2023/10/15</span>
                        <span>•</span>
                        <span className="text-blue-600 hover:text-blue-700 cursor-pointer">閱讀全文</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl p-3 hover:shadow-md transition-all">
                  <div className="flex gap-4 items-start">
                    <div className="w-20 h-20 rounded-lg flex-shrink-0 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                        alt="永續新聞圖片"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="font-medium text-gray-900">啟動淨零轉型計畫</div>
                        <span className="flex-shrink-0 px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">重要</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">承諾 2030 年達成營運淨零排放目標，投入綠能設備升級與供應鏈優化</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>2023/09/28</span>
                        <span>•</span>
                        <span className="text-blue-600 hover:text-blue-700 cursor-pointer">閱讀全文</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl p-3 hover:shadow-md transition-all">
                  <div className="flex gap-4 items-start">
                    <div className="w-20 h-20 rounded-lg flex-shrink-0 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                        alt="永續新聞圖片"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="font-medium text-gray-900">在地小農合作計畫啟動</div>
                        <span className="flex-shrink-0 px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">社會</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">與50位小農簽訂公平貿易契約，確保原料永續供應，支持在地農業發展</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>2023/09/15</span>
                        <span>•</span>
                        <span className="text-blue-600 hover:text-blue-700 cursor-pointer">閱讀全文</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-3 text-center text-blue-600 bg-blue-50 rounded-xl font-medium hover:bg-blue-100 transition-colors">
              查看完整企業永續報告 ➝
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-[72px] flex gap-3 p-4 bg-white/80 backdrop-blur-md border-t">
          <button className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
            加入環保商品比較
          </button>
          <button 
            className={`p-3 border rounded-xl transition-all ${isLiked ? 'bg-pink-50 border-pink-200' : 'hover:bg-gray-50'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-pink-500 stroke-pink-500' : ''}`} />
          </button>
          <button className="p-3 border rounded-xl hover:bg-gray-50 transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around p-4 bg-white/80 backdrop-blur-md border-t">
        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <Home className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <Search className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <BarChart2 className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <User className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
};

export default ProductDetailPage; 