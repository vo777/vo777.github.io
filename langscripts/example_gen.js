
function randomSentence(parsed_data) {
    const data_row = parsed_data[Math.floor(parsed_data.length * Math.random())];
    let acc = '';

    for (let i = 0; i < data_row.length; ++i) {
        acc += data_row[i][Math.floor(data_row[i].length * Math.random())] + ' ';
    }

    return acc;
}

function parseInput(input_data, parsed_data) {
    for (let split1 of input_data.split('=')) {
        const split2_arr = [];
        const split2 = split1.split('/');
        for (let split3 of split2) {
            const split3_arr = [];
            const split4 = split3.split('\n');

            for (let split5 of split4) {
                const tmp = split5.trim();
                console.log(tmp);
                if (tmp.length) {
                    split3_arr.push(tmp);
                }
            }
            if (split3_arr.length) {
                split2_arr.push(split3_arr);
            }
        }
        if (split2_arr.length) {
            parsed_data.push(split2_arr);
        }
    }

    console.log(parsed_data);
}


function makeTable(parsed_data, table) {
    for (let data_row of parsed_data) {
        const row = table.insertRow(-1);
        for (let i = 0; i < data_row.length; ++i) {
            const cell = row.insertCell(i);
            let acc = '';
            for (let j = 0; j < data_row[i].length; ++j) {
                const a = data_row[i][j];
                const b = a.replaceAll("\'","_");				
                acc += `<span onclick='say("${b}")'>${a}</span>`;
                if (j != data_row[i].length - 1) { acc += '<br>'; }
            }
            cell.innerHTML = acc;
        }

    }

}

