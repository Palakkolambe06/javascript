document.addEventListener('DOMContentLoaded', () => {
  const addToCartButton = document.querySelector('.add-to-cart-button');
  const buyNowButton = document.querySelector('.buy-now-button');

  if (addToCartButton) {
    addToCartButton.style.backgroundColor = 'yellow';
  }

  if (buyNowButton) {
    buyNowButton.style.backgroundColor = 'orange';
  }
});