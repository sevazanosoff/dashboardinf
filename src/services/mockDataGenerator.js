function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMockSalesData() {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home Appliances', 'Toys'];
    const mockData = [];

    for (let i = 0; i < categories.length; i++) {
        const revenue = getRandomInt(500, 5000);
        const unitsSold = getRandomInt(10, 100);
        const profitMargin = getRandomInt(5, 30);

        mockData.push({
            id: i + 1,
            category: categories[i],
            revenue: revenue,
            unitsSold: unitsSold,
            profitMargin: profitMargin
        });
    }

    return mockData;
}

export default generateMockSalesData;