const shopQuery = document.querySelector('#shop-query');
const shopGroups = Array.from(document.querySelectorAll('[data-shop-group]'));
const shopProducts = document.querySelector('#shop-products');
const shopCards = Array.from(shopProducts.querySelectorAll('.shop-card'));
const shopMore = document.querySelector('#shop-more');
const shopCount = document.querySelector('#shop-count');
const pageSize = 24;
let limit = pageSize;
let category = '';

function updateProducts() {
  const query = shopQuery.value.trim().toLocaleLowerCase('ru');
  let matches = 0;
  for (const card of shopCards) {
    const inCategory = !category || card.dataset.category === category;
    const label = card.querySelector('h3').textContent + ' ' + card.querySelector('.shop-card__meta').textContent;
    const matchesQuery = label.toLocaleLowerCase('ru').includes(query);
    if (inCategory && matchesQuery) {
      matches += 1;
      card.hidden = matches > limit;
    } else {
      card.hidden = true;
    }
  }
  shopCount.textContent = matches ? `Показано ${Math.min(limit, matches)} из ${matches}` : 'Товары не найдены';
  shopMore.hidden = matches <= limit;
}

function resetLimit() {
  limit = pageSize;
  updateProducts();
}

shopQuery.addEventListener('input', resetLimit);
for (const button of shopGroups) {
  button.addEventListener('click', () => {
    category = button.dataset.shopGroup;
    shopQuery.value = '';
    for (const group of shopGroups) {
      group.setAttribute('aria-pressed', String(group === button));
    }
    resetLimit();
  });
}
shopMore.addEventListener('click', () => {
  limit += pageSize;
  updateProducts();
});
updateProducts();
