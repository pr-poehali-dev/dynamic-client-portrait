import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';

const Index = () => {
  // Mock data для графиков
  const demographyData = [
    { name: 'Мужчины', value: 45, color: '#2563EB' },
    { name: 'Женщины', value: 55, color: '#06D6A0' }
  ];

  const ageData = [
    { name: '18-30', value: 35, color: '#2563EB' },
    { name: '31-45', value: 42, color: '#06D6A0' },
    { name: '46+', value: 23, color: '#FF9E00' }
  ];

  const revenueData = [
    { month: 'Янв', revenue: 120, expenses: 80 },
    { month: 'Фев', revenue: 135, expenses: 90 },
    { month: 'Мар', revenue: 148, expenses: 95 },
    { month: 'Апр', revenue: 165, expenses: 110 },
    { month: 'Май', revenue: 180, expenses: 120 },
    { month: 'Июн', revenue: 195, expenses: 125 }
  ];

  const categoryData = [
    { category: 'Продукты', amount: 85 },
    { category: 'Авто', amount: 120 },
    { category: 'Развлечения', amount: 65 },
    { category: 'Одежда', amount: 95 },
    { category: 'Здоровье', amount: 75 }
  ];

  return (
    <div className="min-h-screen bg-background font-['Inter'] text-foreground">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Динамический портрет клиента</h1>
              <p className="text-muted-foreground mt-1">Аналитика клиентской базы в реальном времени</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
              <Button size="sm">
                <Icon name="RefreshCw" size={16} className="mr-2" />
                Обновить
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Control Panel */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Filter" size={20} />
              Панель управления
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Период</label>
                <Select defaultValue="month">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Месяц</SelectItem>
                    <SelectItem value="quarter">Квартал</SelectItem>
                    <SelectItem value="year">Год</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сегмент</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все клиенты</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="regular">Постоянные</SelectItem>
                    <SelectItem value="new">Новые</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Регион</label>
                <Select defaultValue="russia">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="russia">Вся Россия</SelectItem>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="regions">Регионы</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Icon name="Search" size={16} className="mr-2" />
                  Применить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Общее клиентов</p>
                  <h3 className="text-2xl font-bold">24K</h3>
                  <div className="flex items-center mt-1">
                    <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+5%</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Icon name="Users" size={24} className="text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Средний доход</p>
                  <h3 className="text-2xl font-bold">₽124K</h3>
                  <div className="flex items-center mt-1">
                    <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+12%</span>
                  </div>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Icon name="DollarSign" size={24} className="text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Лояльность</p>
                  <h3 className="text-2xl font-bold">78%</h3>
                  <div className="flex items-center mt-1">
                    <Icon name="TrendingDown" size={16} className="text-red-500 mr-1" />
                    <span className="text-sm text-red-500">-2%</span>
                  </div>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <Icon name="Heart" size={24} className="text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Средний чек</p>
                  <h3 className="text-2xl font-bold">₽2.8K</h3>
                  <div className="flex items-center mt-1">
                    <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+8%</span>
                  </div>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <Icon name="ShoppingCart" size={24} className="text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Demographics Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PieChart" size={20} />
                  Демография
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Пол</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={demographyData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({name, value}) => `${name}: ${value}%`}
                        >
                          {demographyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Возрастные группы</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={ageData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({name, value}) => `${name}: ${value}%`}
                        >
                          {ageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">👶 Дети</span>
                      <Badge variant="secondary">42%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">🐕 Животные</span>
                      <Badge variant="secondary">38%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">🚗 Авто</span>
                      <Badge variant="secondary">65%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  География
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Map" size={48} className="text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Интерактивная карта РФ</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Москва</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Санкт-Петербург</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Регионы</span>
                      <span className="text-sm font-medium">57%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Finance & Consumption Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Доходы/Расходы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={3} name="Доходы (₽K)" />
                    <Line type="monotone" dataKey="expenses" stroke="#06D6A0" strokeWidth={3} name="Расходы (₽K)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={20} />
                  Расходы по категориям
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Behavior Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ShoppingBag" size={20} />
                  Анализ корзины
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {['Молоко', 'Хлеб', 'Масло', 'Мясо', 'Овощи', 'Фрукты'].map((item, index) => (
                      <div
                        key={item}
                        className={`p-3 rounded-lg text-center text-sm font-medium ${
                          index < 2 ? 'bg-red-100 text-red-700' : 
                          index < 4 ? 'bg-orange-100 text-orange-700' : 
                          'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Топ-5 товаров</h4>
                    <div className="space-y-2">
                      {[
                        { name: '🥛 Молоко', percent: 87 },
                        { name: '🍞 Хлеб', percent: 78 },
                        { name: '🧈 Масло', percent: 65 },
                        { name: '🥩 Мясо', percent: 58 },
                        { name: '🥕 Овощи', percent: 52 }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                          <span className="text-sm">{item.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-gray-200 rounded-full">
                              <div 
                                className="h-full bg-blue-500 rounded-full" 
                                style={{ width: `${item.percent}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium w-8">{item.percent}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ArrowRightLeft" size={20} />
                  Перетоки между сетями
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                    <div className="text-center">
                      <Icon name="GitBranch" size={48} className="text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Sankey диаграмма</p>
                      <p className="text-xs text-gray-500">Объемы перетоков</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">К нам</span>
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" size={16} className="text-green-500" />
                        <span className="text-sm font-medium">₽2.1M</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">От нас</span>
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingDown" size={16} className="text-red-500" />
                        <span className="text-sm font-medium">₽950K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Bell" size={20} />
                  Триггеры событий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-sm">Рост расходов на авто у 1.2K клиентов</p>
                    <p className="text-xs text-gray-500 mt-1">2 часа назад</p>
                  </div>
                  <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                    <p className="text-sm">Увеличение лояльности в сегменте VIP</p>
                    <p className="text-xs text-gray-500 mt-1">5 часов назад</p>
                  </div>
                  <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                    <p className="text-sm">Снижение активности в регионах</p>
                    <p className="text-xs text-gray-500 mt-1">1 день назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;