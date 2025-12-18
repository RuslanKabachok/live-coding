import { useState, useMemo } from 'react';

function ProductStatistics() {
  const [sortBy, setSortBy] = useState('price');
  const [minPrice, setMinPrice] = useState(0);
  
  const products = [
    { id: 1, name: 'Ноутбук', price: 25000, rating: 4.5 },
    { id: 2, name: 'Телефон', price: 15000, rating: 4.8 },
    { id: 3, name: 'Навушники', price: 3000, rating: 4.2 },
    { id: 4, name: 'Монітор', price: 8000, rating: 4.6 },
    { id: 5, name: 'Клавіатура', price: 2000, rating: 4.3 },
    { id: 6, name: 'Миша', price: 1500, rating: 4.7 },
  ];
  
  const filteredProducts = useMemo(() => {
    console.log('🔍 Фільтрую товари за ціною...');
    return products.filter(p => p.price >= minPrice);
  }, [minPrice]);
  

  const sortedProducts = useMemo(() => {
    console.log('🔄 Сортую товари...');
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });
  }, [filteredProducts, sortBy]);
  

  const statistics = useMemo(() => {
    console.log('📊 Рахую статистику...');
    
    const total = filteredProducts.reduce((sum, p) => sum + p.price, 0);
    const avg = filteredProducts.length > 0 ? total / filteredProducts.length : 0;
    const avgRating = filteredProducts.length > 0 
      ? filteredProducts.reduce((sum, p) => sum + p.rating, 0) / filteredProducts.length 
      : 0;
    
    return {
      total,
      average: avg,
      count: filteredProducts.length,
      avgRating: avgRating.toFixed(1)
    };
  }, [filteredProducts]);
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Статистика товарів</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Мінімальна ціна: {minPrice} грн
          <input 
            type="range" 
            min="0" 
            max="30000" 
            step="1000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </label>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Сортувати за: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Назвою</option>
          <option value="price">Ціною</option>
          <option value="rating">Рейтингом</option>
        </select>
      </div>
      
      <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>📊 Статистика</h3>
        <p>Товарів: {statistics.count}</p>
        <p>Загальна вартість: {statistics.total.toLocaleString()} грн</p>
        <p>Середня ціна: {statistics.average.toFixed(0)} грн</p>
        <p>Середній рейтинг: ⭐ {statistics.avgRating}</p>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sortedProducts.map(product => (
          <li key={product.id} style={{ 
            background: '#f5f5f5', 
            padding: '10px', 
            marginBottom: '10px',
            borderRadius: '5px'
          }}>
            <strong>{product.name}</strong> - {product.price} грн - ⭐ {product.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductStatistics;