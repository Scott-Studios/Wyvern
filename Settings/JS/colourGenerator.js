function addColour(){
    let name = document.getElementById('colour_creation_name').value;
    let rate = parseFloat(document.getElementById('colour_creation_rate').value);
    let colour = document.getElementById('colour_creation_colour').value;
    colour = hexToRgb(colour);
    if(name in colourMasterDict || name == '' || name == null){
        document.querySelector('.creation_form').classList.add('form_error');
    } else if(Object.values(colourMasterDict).indexOf(colour) > -1) {
        document.querySelector('.creation_form').classList.add('form_error');
    } else {
        document.querySelector('.creation_form').classList.remove('form_error');
        colourMasterDict[name] = [colour, {"yes":[], "no":[]}, rate];

        //Clear inputs
        document.getElementById('colour_creation_name').value = ""; 
        changePage('PAGE_settings');
    }
}

function hexToRgb(c){
    if(/^#([a-f0-9]{3}){1,2}$/.test(c)){
        if(c.length== 4){
            c= '#'+[c[1], c[1], c[2], c[2], c[3], c[3]].join('');
        }
        c= '0x'+c.substring(1);
        return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+')';
    }
    return '';
}

function changeToNewColour(){
    document.getElementById('colour_creation_name').value = '';
    document.getElementById('colour_creation_colour').setAttribute('value', '#000000');
    document.getElementById('create_new_colour_button').classList.remove("hidden");
    document.getElementById('change_colour_button').classList.add("hidden");
    changePage('PAGE_add_new_colour');
}