// Food Categories and Items
const foodCategories = {
    "American": ["Burger", "Pizza", "Hotdog", "Fries", "Cheeseburger"],
    "Indian": ["Biryani", "Butter Chicken", "Samosa", "Naan", "Aloo Gobi"],
    "Chinese": ["Kung Pao Chicken", "Spring Rolls", "Sweet and Sour Pork", "Chow Mein", "Dumplings"],
    "Pizza": ["Margherita", "Pepperoni", "Hawaiian", "BBQ Chicken", "Vegetarian"],
};

function generateFood() {
    // Randomly pick a category
    const categories = Object.keys(foodCategories);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // Randomly pick 5 food items from that category
    const randomFoods = foodCategories[randomCategory]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);

    // Display the result
    const foodResult = document.getElementById('foodResult');
    foodResult.innerHTML = `
        <h2>Food Category: ${randomCategory}</h2>
        <ul>
            ${randomFoods.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}
