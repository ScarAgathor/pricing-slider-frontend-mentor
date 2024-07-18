const slider = document.getElementById('slider__button');
const check = document.getElementById('checkbox');
const views = document.getElementById('views__value');
const price = document.getElementById('pricing__value');

assignViews()
assignPrice()
sliderBG()

check.oninput = () => {
    assignPrice()
}

slider.oninput = () => {
    assignViews()
    assignPrice()
    sliderBG()
}

slider.addEventListener('mousemove', () => {
    sliderBG()
}) 

function assignViews() {
    switch(slider.value) {
        case '8':
            views.textContent = `10K`;
            break;
        case '12':
            views.textContent = '50K';
            break;
        case '16':
            views.textContent = '100K';
            break;
        case '24':
            views.textContent = '500K';
            break;
        case '36':
            views.textContent = '1M';
            break;
        default:
            break;
    }
}

function assignPrice() {
    switch(slider.value) {
        case '8':
            if(check.checked) {
                let value = (8 - (8 * 25 / 100)).toFixed(2)
                price.textContent = `$${value}`;
            } else {
                price.textContent = `$8.00`
            }
            break;
        case '12':
            if(check.checked) {
                let value = (12 - (12 * 25 / 100)).toFixed(2)
                price.textContent = `$${value}`;
            } else {
                price.textContent = `$12.00`
            }
            break;
        case '16':
            if(check.checked) {
                let value = (16 - (16 * 25 / 100)).toFixed(2)
                price.textContent = `$${value}`;
            } else {
                price.textContent = `$16.00`
            }
            break;
        case '24':
            if(check.checked) {
                let value = (24 - (24 * 25 / 100)).toFixed(2)
                price.textContent = `$${value}`;
            } else {
                price.textContent = `$24.00`
            }
            break;
        case '36':
            if(check.checked) {
                let value = (36 - (36 * 25 / 100)).toFixed(2)
                price.textContent = `$${value}`;
            } else {
                price.textContent = `$36.00`
            }
            break;
        default:
            break;
    }
}

function sliderBG() {
    let x = slider.value;

    x = (x - 8) / 28 * 100;
    let color = `linear-gradient(90deg, #a4f3eb ${x}%, #e0e4ee ${x}%)`;
    slider.style.background = color;
}
