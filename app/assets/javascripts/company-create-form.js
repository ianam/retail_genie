// Add listeners to selections on Company new page
document.addEventListener('DOMContentLoaded', () => {

    // Add subindustry selector based on industry selected
    document.querySelector('#industry-selector').addEventListener('input', event => {
        const { currentTarget } = event;
        const industry = currentTarget.value;
        const subindustry = document.querySelector('.company_subindustry_id')
        const option_list = document.querySelectorAll('#company_subindustry_id')

        if (industry === "1") { // Motor Vehicle & Parts Dealer
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value=""></option><option value="1">Automobile Dealer</option><option value="2">Other Motor Vehicle Dealer</option><option value="3">Auto Parts &amp; Accessories or Tire Store</option>'
            })
        } else if (industry === "2") { // Furniture & Home Furnishings
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="4">Furniture Store</option><option value="5">Home Furnishings Store</option>'
            })
        } else if (industry === "5") { // Food & Beverage Store
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="6">Grocery Store</option><option value="7">Specialty Food Store</option><option value="8">Beer, Wine &amp; Liquor Store</option>'
            })
        } else if (industry === "8") { // Clothing & Accessories Store
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="9">Clothing Store</option><option value="10">Shoe Store</option><option value="11">Jewellery, Luggage or Leather Goods</option>'
            })
        } else if (industry === "10") { // General Merchandise Store
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="12">Department Store</option><option value="13">Other General Merchandise Store</option>'
            })
        } else {
            subindustry.classList.add('hidden');
        }
    });
});
