const App = () => (
  <>
    <style>{`
      .add-to-cart-button {
        background-color: yellow;
      }

      .buy-now-button {
        background-color: orange;
      }
    `}</style>

    <button className="add-to-cart-button">Add to cart</button>
    <button className="buy-now-button">Buy now</button>
  </>
);

export default App;