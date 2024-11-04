const result_box = document.querySelector('.result');
const btn_add_plates = document.querySelector('.add_plates');

const list_plates = JSON.parse(localStorage.getItem('plates')) || [];

function addPlates(e){
    e.preventDefault();
    const plate_text = (this.querySelector('[name=plate]')).value;
   
    const new_plate = {
        plate_name: plate_text,
        deliver: false
    }

    list_plates.push(new_plate);
    showResult(list_plates);
    localStorage.setItem('plates', JSON.stringify(list_plates));

    this.reset();
}

function showResult(list_plates){
    const array_text = list_plates.map( (plate,pos) =>
         `<li><input data-pos=${pos} id='cod-${pos}' type='checkbox' ${plate.deliver ? 'checked' : ''}>
         <label for='cod-${pos}'>${plate.plate_name}</label>
         </li>`).join('');
    result_box.innerHTML = array_text;
    console.log('ba');
}

function changeState(e){
    const input_selected = e.target;
    //console.log(input_selected.dataset); data-x
    const pos = input_selected.dataset.pos;
    list_plates[pos].deliver = !list_plates[pos].deliver;
    //console.log(list_plates[pos]);

    localStorage.setItem('plates', JSON.stringify(list_plates));
    showResult(list_plates);
}

btn_add_plates.addEventListener('submit', addPlates);
result_box.addEventListener('change', changeState);

showResult(list_plates)
