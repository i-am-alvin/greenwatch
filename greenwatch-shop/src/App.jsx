import React, { useState, useEffect } from 'react';
import { Search, Sliders, Star, Info } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Select } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { Checkbox } from "./components/ui/checkbox";

// Product categories and mock data
const productCategories = [
  { id: 'appliances', name: '家電設備' },
  { id: 'office', name: '辦公設備' },
  { id: 'lighting', name: '照明設備' },
  { id: 'water', name: '節水設備' },
  { id: 'building', name: '建築材料' },
  { id: 'transport', name: '運輸工具' },
  { id: 'renewable', name: '再生能源設備' },
  { id: 'recycled', name: '回收再製品' }
];

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: 'EcoCool X200',
    category: 'appliances',
    image: 'https://via.placeholder.com/300x200',
    energyEfficiency: 25,
    price: 29900,
    certifications: ['Energy Star', 'ISO 14001'],
    rating: 4.5,
    carbonReduction: 30,
    description: '高效能環保空調系統',
    details: {
      material: '環保製冷劑',
      powerConsumption: '1200W',
      noiseLevel: '35dB'
    }
  },
  {
    id: 2,
    name: 'GreenBreeze 3500',
    category: 'appliances',
    image: 'https://via.placeholder.com/300x200',
    energyEfficiency: 22,
    price: 31900,
    certifications: ['Energy Star', 'ISO 14001'],
    rating: 4.2,
    carbonReduction: 25,
    description: '智慧節能空調設備',
    details: {
      material: '環保製冷劑',
      powerConsumption: '1400W',
      noiseLevel: '38dB'
    }
  },
  {
    id: 3,
    name: 'EcoLight Pro LED',
    category: 'lighting',
    image: 'https://via.placeholder.com/300x200',
    energyEfficiency: 80,
    price: 2990,
    certifications: ['Energy Star', 'RoHS'],
    rating: 4.8,
    carbonReduction: 75,
    description: '智慧調光 LED 燈具',
    details: {
      wattage: '9W',
      lifespan: '50000小時',
      colorTemp: '2700K-6500K'
    }
  },
  {
    id: 4,
    name: 'SmartPrint Eco',
    category: 'office',
    image: 'https://via.placeholder.com/300x200',
    energyEfficiency: 35,
    price: 15900,
    certifications: ['Energy Star', 'Blue Angel'],
    rating: 4.3,
    carbonReduction: 40,
    description: '雙面列印省紙印表機',
    details: {
      printSpeed: '30ppm',
      resolution: '4800dpi',
      paperRecycling: '支援'
    }
  },
  {
    id: 5,
    name: 'AquaSave Pro',
    category: 'water',
    image: 'https://via.placeholder.com/300x200',
    energyEfficiency: 45,
    price: 4900,
    certifications: ['WaterSense', 'ISO 14001'],
    rating: 4.6,
    carbonReduction: 30,
    description: '智慧節水龍頭系統',
    details: {
      flowRate: '1.5GPM',
      sensor: '紅外線感應',
      installation: '簡易安裝'
    },
    violations: ['違反勞動法規']
  },
  {
    id: 6,
    name: 'SolarPanel X1',
    category: 'renewable',
    image: 'https://via.placeholder.com/300x200',
    energyEfficiency: 95,
    price: 45900,
    certifications: ['IEC 61215', 'ISO 14001'],
    rating: 4.7,
    carbonReduction: 100,
    description: '高效能太陽能板',
    details: {
      power: '400W',
      efficiency: '21.5%',
      warranty: '25年'
    }
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 20000,
    energyEfficiency: '20',
    certifications: {
      'Energy Star': false,
      'ISO 14001': false,
      'FSC': false,
      'B Corp': false
    },
    carbonReduction: '25'
  });
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  // 處理篩選邏輯
  useEffect(() => {
    let result = mockProducts;

    // 類別篩選
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }

    // 價格篩選
    result = result.filter(product => product.price <= filters.priceRange);

    // 能源效率篩選
    result = result.filter(product => 
      product.energyEfficiency >= parseInt(filters.energyEfficiency)
    );

    // 認證篩選
    const selectedCertifications = Object.entries(filters.certifications)
      .filter(([_, isSelected]) => isSelected)
      .map(([cert]) => cert);

    if (selectedCertifications.length > 0) {
      result = result.filter(product =>
        product.certifications.some(cert => selectedCertifications.includes(cert))
      );
    }

    // 減碳效益篩選
    result = result.filter(product => 
      product.carbonReduction >= parseInt(filters.carbonReduction)
    );

    setFilteredProducts(result);
  }, [filters]);

  const FilterSection = () => (
    <div className="w-64 p-4 space-y-6 bg-white rounded-lg shadow">
      <div>
        <h3 className="text-lg font-semibold mb-2">產品類型</h3>
        <Select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          options={[
            { value: 'all', label: '所有類型' },
            ...productCategories.map(cat => ({
              value: cat.id,
              label: cat.name
            }))
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">價格範圍</h3>
        <div className="px-2">
          <Slider
            min={0}
            max={50000}
            step={1000}
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: parseInt(e.target.value) })}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>NT$ 0</span>
            <span>NT$ {filters.priceRange.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">能源效率</h3>
        <Select
          value={filters.energyEfficiency}
          onChange={(e) => setFilters({ ...filters, energyEfficiency: e.target.value })}
          options={[
            { value: '20', label: '20% 以上' },
            { value: '40', label: '40% 以上' },
            { value: '60', label: '60% 以上' },
            { value: '80', label: '80% 以上' }
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">認證類型</h3>
        <div className="space-y-2">
          {Object.entries(filters.certifications).map(([cert, isChecked]) => (
            <Checkbox
              key={cert}
              id={cert}
              label={cert}
              checked={isChecked}
              onChange={(e) => setFilters({
                ...filters,
                certifications: {
                  ...filters.certifications,
                  [cert]: e.target.checked
                }
              })}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">減碳效益</h3>
        <Select
          value={filters.carbonReduction}
          onChange={(e) => setFilters({ ...filters, carbonReduction: e.target.value })}
          options={[
            { value: '25', label: '25% 以上' },
            { value: '50', label: '50% 以上' },
            { value: '75', label: '75% 以上' }
          ]}
        />
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
        <CardTitle className="mt-2">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>{product.rating}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {product.certifications.map((cert, index) => (
              <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {cert}
              </span>
            ))}
            {product.violations?.map((violation, index) => (
              <span key={`violation-${index}`} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                {violation}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              節能 {product.energyEfficiency}%
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              減碳 {product.carbonReduction}%
            </span>
          </div>
          <div className="text-lg font-semibold">
            NT$ {product.price.toLocaleString()}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => setSelectedProduct(product)}
        >
          瞭解更多
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              GreenWatchAI - 智慧永續商品推薦
            </h1>
            <nav className="space-x-4">
              <Button variant="ghost">關於我們</Button>
              <Button variant="ghost">聯繫方式</Button>
              <Button variant="ghost">會員中心</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="hidden lg:block">
            <FilterSection />
          </aside>

          <div className="flex-1">
            <div className="mb-4">
              <p className="text-gray-600">
                顯示 {filteredProducts.length} 個結果
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold mb-2">永續指標</h3>
                <ul className="space-y-2">
                  <li>能源效率：{selectedProduct.energyEfficiency}%</li>
                  <li>碳排放減少：{selectedProduct.carbonReduction}%</li>
                  <li>
                    認證：
                    {selectedProduct.certifications.join(', ')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">產品規格</h3>
                <p className="text-gray-600">
                  {selectedProduct.description}
                </p>
              </div>
            </div>
            <Button className="w-full">
              立即購買
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
