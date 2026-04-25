function openCategory(category) {
  const grid = document.getElementById("productGrid");
  let content = "";

  if (category === "Wings") {
    content = `
      <div class="products">
        <button class="product-item">6 Wings</button>
        <button class="product-item">7 Wings</button>
        <button class="product-item">6 Wings Meal</button>
      </div>
    `;
  } 
  else if (category === "Chicken") {
    content = `
      <div class="products">
        <button class="product-item">2PCS</button>
        <button class="product-item">3PCS</button>
        <button class="product-item">4PCS</button>
        <button class="product-item">2PCS Meal</button>
        <button class="product-item">3PCS Meal</button>
        <button class="product-item">4PCS Meal</button>
      </div>
    `;
  }
  else if (category === "Strips") {
    content = `
      <div class="products">
        <button class="product-item">4PCS Strips Meal</button>
        <button class="product-item">5PCS Strips Meal</button>
        <button class="product-item">1PCS Strip</button>
      </div>
    `;
  }
  else if (category === "Burgers") {
    content = `
      <div class="products">
        <button class="product-item">Fillet Burger Meal</button>
        <button class="product-item">Fillet Burger</button>
        <button class="product-item">1/4 Pounder Meal</button>
        <button class="product-item">1/4 Pounder</button>
        <button class="product-item">1/2 Pounder Meal</button>
        <button class="product-item">1/2 Pounder</button>
        <button class="product-item">Tower Burger Meal</button>
        <button class="product-item">Tower Burger</button>
        <button class="product-item">Double Fillet Burger Meal</button>
        <button class="product-item">Double Fillet Burger</button>
        <button class="product-item">Double Ringer Burger Meal</button>
        <button class="product-item">Double Ringer Burger</button>
        <button class="product-item">Zinger Burger Meal</button>
        <button class="product-item">Zinger Burger</button>
        <button class="product-item">Veggie Burger Meal</button>
        <button class="product-item">Veggie Burger</button>
        <button class="product-item">Fish Burger Meal</button>
        <button class="product-item">Fish Burger</button>
      </div>
    `;
  }

  grid.innerHTML = `
    <div class="category-screen">
      <div class="category-header">${category}</div>
      ${content}
    </div>
  `;
}
document.querySelector('.back-btn').classList.add('hide-text');