import React, { useState } from 'react';
import { Leaf, Send, Mic, Upload, Info, Star } from 'lucide-react';

// Header Component
const Header = () => (
  <header className="bg-white shadow-sm p-4">
    <div className="max-w-7xl mx-auto flex items-center">
      <div className="flex items-center space-x-2">
        <Leaf className="h-8 w-8 text-green-600" />
        <h1 className="text-xl font-bold text-gray-800">GreenWatchAI - 智慧永續產品推薦</h1>
      </div>
      <nav className="ml-auto">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-green-600">關於我們</a></li>
          <li><a href="#" className="text-gray-600 hover:text-green-600">聯繫方式</a></li>
          <li><a href="#" className="text-gray-600 hover:text-green-600">會員中心</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Chat Message Component
const ChatMessage = ({ message, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6 px-4 md:px-8`}>
    <div className={`flex items-start space-x-3 max-w-3xl ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser ? 'bg-green-100' : 'bg-gray-100'
      }`}>
        {isUser ? (
          <div className="text-green-600 text-sm font-semibold">你</div>
        ) : (
          <Leaf className="w-5 h-5 text-green-600" />
        )}
      </div>
      <div className={`flex-1 ${isUser ? 'text-right' : ''}`}>
        <div className={`inline-block rounded-xl py-3 px-4 shadow-sm
          ${isUser ? 'bg-green-600 text-white' : 'bg-white border border-gray-100'}`}>
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  </div>
);

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start space-x-5">
      <div className="w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
        <img 
          src={`https://placehold.co/200x200/f3f4f6/1f2937?text=${product.name}`} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900 truncate">{product.name}</h3>
          <span className="text-lg font-medium text-green-600">NT$ {product.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({product.rating}/5)</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <div className="flex items-center flex-wrap gap-2">
          <div className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
            節能認證
          </div>
          <div className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
            減碳{product.carbonReduction}%
          </div>
          {product.certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
              {cert}
            </div>
          ))}
          {product.negativeLabel && (
            <div className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-medium">
              {product.negativeLabel}
            </div>
          )}
        </div>
      </div>
      <button 
        onClick={() => {}} 
        className="flex-shrink-0 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 
          transition-colors text-sm font-medium shadow-sm hover:shadow-md"
      >
        瞭解更多
      </button>
    </div>
  </div>
);

// Product Detail Panel Component
const ProductDetailPanel = ({ product, onClose }) => (
  <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg p-6 transform transition-transform">
    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
      <Info className="w-6 h-6" />
    </button>
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
      <img src="/api/placeholder/320/240" alt={product.name} className="w-full h-48 object-cover rounded-lg mt-4" />
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700">永續指標</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between">
              <span>能源效率</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 rounded-full h-2" style={{width: `${product.efficiency}%`}}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span>碳排放減少</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 rounded-full h-2" style={{width: `${product.carbonReduction}%`}}></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">認證標章</h3>
          <div className="flex space-x-2 mt-2">
            {product.certifications.map((cert, index) => (
              <div key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                {cert}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">價格與規格</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">NT$ {product.price.toLocaleString()}</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
          立即購買
        </button>
      </div>
    </div>
  </div>
);

// Chat Input Component
const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white p-4 md:p-6">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
        <div className="relative flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="請輸入您的需求..."
            className="flex-1 p-4 pr-32 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 
              focus:ring-green-500 focus:border-transparent text-base placeholder:text-gray-400"
          />
          <div className="absolute right-2 flex items-center space-x-2">
            <button type="button" className="p-2 text-gray-400 hover:text-green-600 transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button type="button" className="p-2 text-gray-400 hover:text-green-600 transition-colors">
              <Upload className="w-5 h-5" />
            </button>
            <button 
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 
                transition-colors flex items-center space-x-2 text-sm font-medium shadow-sm"
            >
              <span>送出</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// Main App Component
const App = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: '哈囉，我想找一台減碳效果好的空調，預算大約三萬元左右。', isUser: true },
    { id: 2, text: '好的，為了更了解您的需求，請問您對節能認證或減少碳排放的比例特別在意嗎？', isUser: false },
    { id: 3, text: '是的，希望能有明確的認證標準。', isUser: true },
    { id: 4, text: '以下是三款符合您預算且具備 Energy Star 認證的空調。它們平均比市面上一般空調省電 20% 以上。請點擊以下任一產品的『瞭解更多』按鈕，查看詳細資訊。', isUser: false },
    { id: 5, text: '那跟我之前用的 XX 品牌比較起來，減碳效果如何？', isUser: true },
    { id: 6, text: '經過比對，EcoCool X100 相比 XX 品牌舊機型可以多省 25% 電量，相當於每年減少 100 公斤的碳排放。建議您可以詳細了解該產品。點擊『瞭解更多』按鈕，即可檢視詳細規格與購買連結。', isUser: false },
  ]);

  const [products] = useState([
    {
      name: 'EcoCool X100',
      rating: 4,
      description: '智能變頻空調，具備Energy Star認證，年省電20%以上',
      carbonReduction: 25,
      price: 29900,
      efficiency: 85,
      certifications: ['Energy Star', 'ISO 14001', '環保標章'],
      specifications: [
        '變頻省電技術',
        '智能溫控系統',
        '除濕功能',
        'PM2.5過濾'
      ]
    },
    {
      name: 'GreenBreeze 3000',
      rating: 5,
      description: '新一代環保空調，搭載AI節能控制系統',
      carbonReduction: 30,
      price: 31900,
      efficiency: 90,
      certifications: ['Energy Star', '碳足跡標章', '環保標章'],
      specifications: [
        'AI智慧節能',
        '靜音模式',
        '奈米防護',
        '遠端控制'
      ],
      negativeLabel: '違反勞動法規'
    },
    {
      name: 'AeroSustain Pro',
      rating: 4,
      description: '專業級節能空調，完整認證支持',
      carbonReduction: 28,
      price: 28900,
      efficiency: 88,
      certifications: ['Energy Star', 'ISO 14001'],
      specifications: [
        '電漿淨化',
        '濕度感應',
        '智能預約',
        '省電模式'
      ]
    }
  ]);

  const handleSendMessage = (text) => {
    setMessages(prev => [...prev, { id: prev.length + 1, text, isUser: true }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto py-6 px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-sm min-h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto py-6 space-y-6">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message.text} isUser={message.isUser} />
            ))}
            {messages.length >= 4 && (
              <div className="px-4 md:px-8 space-y-4">
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            )}
          </div>
          <ChatInput onSend={handleSendMessage} />
        </div>
      </main>
    </div>
  );
};

export default App;