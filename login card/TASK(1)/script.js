const products = [
  { name: 'Runner Shoes', category: 'Shoes', price: 80, oldPrice: 100, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
  { name: 'Classic Watch', category: 'Watch', price: 120, oldPrice: 150, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Travel Bag', category: 'Bag', price: 60, oldPrice: 80, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80' },
  { name: 'Headphones', category: 'Headphones', price: 150, oldPrice: 180, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
];

const grid = document.querySelector('#grid');
const category = document.querySelector('#cat');
const price = document.querySelector('#price');

function showProducts() {
  const visibleProducts = products.filter(product =>
    (category.value === 'all' || category.value === product.category) && product.price <= Number(price.value)
  );

  grid.innerHTML = visibleProducts.map(product => `
    <article class="card">
      <div class="pic"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
      <span class="cat">${product.category}</span>
      <h2 class="name">${product.name}</h2>
      <span class="rate" aria-label="Rated 5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      <div class="pr"><span class="price">price:${product.price}</span><br><span class="old">old price:${product.oldPrice}</span></div>
      <button class="btn" type="button">Add to Cart</button>
    </article>
  `).join('') || '<p>No products match the selected filters.</p>';
}

category.addEventListener('change', showProducts);
price.addEventListener('input', showProducts);
showProducts();
