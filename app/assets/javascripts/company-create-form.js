// Add listeners to selections on Company new page
document.addEventListener('DOMContentLoaded', () => {

    // Add subregion selector based on region selected
    document.querySelector('#region-selector').addEventListener('input', event => {
        const { currentTarget } = event;
        const region = currentTarget.value;
        const subregion = document.querySelector('.company_subregion_id')
        const radio_buttons = document.querySelectorAll('.form-check')

        // ************************************************************************
        // TO DO: Add a "no" radio selector that sets "subregion_id" to null
        // ************************************************************************

        if (region === "2") { // British Columbia
            subregion.classList.remove('hidden');
            subregion.firstChild.innerHTML = "Are you located in Vancouver?"
            radio_buttons.forEach((node, i) => {
                if (i === 0) { // Vancouver
                    node.innerHTML = '<input class="form-check-input radio_buttons optional" type="radio" value="1" name="company[subregion_id]" id="company_subregion_id_1"><label class="collection_radio_buttons" for="company_subregion_id_1">Yes</label>'
                } else {
                    node.innerHTML = "";
                }
            })
        } else if (region === "9") { // Ontario
            subregion.classList.remove('hidden');
            subregion.firstChild.innerHTML = "Are you located in Toronto?"
            radio_buttons.forEach((node, i) => {
                if (i === 1) { // Toronto
                    node.innerHTML = '<input class="form-check-input radio_buttons optional" type="radio" value="1" name="company[subregion_id]" id="company_subregion_id_1"><label class="collection_radio_buttons" for="company_subregion_id_1">Yes</label>'
                } else {
                    node.innerHTML = "";
                }
            })
        } else if (region === "11") { // Quebec
            subregion.classList.remove('hidden');
            subregion.firstChild.innerHTML = "Are you located in Montreal?"
            radio_buttons.forEach((node, i) => {
                if (i === 2) { // Montreal
                    node.innerHTML = '<input class="form-check-input radio_buttons optional" type="radio" value="1" name="company[subregion_id]" id="company_subregion_id_1"><label class="collection_radio_buttons" for="company_subregion_id_1">Yes</label>'
                } else {
                    node.innerHTML = "";
                }
            })
        } else {
            subregion.classList.add('hidden');
        }
    });

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
                node.innerHTML = '<option value=""></option><option value="12">Automobile Dealer</option><option value="13">Other Motor Vehicle Dealer</option><option value="14">Auto Parts &amp; Accessories or Tire Store</option>'
            })
        } else if (industry === "2") { // Furniture & Home Furnishings
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="15">Furniture Store</option><option value="16">Home Furnishings Store</option>'
            })
        } else if (industry === "5") { // Food & Beverage Store
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="17">Grocery Store</option><option value="18">Specialty Food Store</option><option value="19">Beer, Wine &amp; Liquor Store</option>'
            })
        } else if (industry === "8") { // Clothing & Accessories Store
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="20">Clothing Store</option><option value="21">Shoe Store</option><option value="22">Jewellery, Luggage or Leather Goods</option>'
            })
        } else if (industry === "10") { // General Merchandise Store
            subindustry.classList.remove('hidden');
            option_list.forEach(node => {
                node.innerHTML = ""
                node.innerHTML = '<option value="23">Department Store</option><option value="24">Other General Merchandise Store</option>'
            })
        } else {
            subindustry.classList.add('hidden');
        }
    });
});
