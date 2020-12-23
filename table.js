function createtable(Wt, Ht, Wc, Hc, g)
{
    var max_row = Math.floor((Wt - g)/(Wc + g)),
    max_col = Math.floor((Ht - g)/(Hc + g)),
    max_chess = max_col * max_row,
    scale = 1;
    return [Wt, Ht, Wc, Hc, g , max_row, max_col, max_chess, scale];
}

function resize(table)
{
    var max_row = table[5] + 1,
    Wt = table[0],
    Ht = table[1],
    W_g = table[2]/table[4],
    W_H = table[2]/table[3],
    Wc = Wt / (max_row * (1 + 1 / W_g) + 1 / W_g),
    Hc = Wc/ W_H,
    g = Wc/ W_g;
    new_table = createtable(Wt, Ht, Wc, Hc, g);
    scale = Wc / table[2];
    new_table[8] = scale;
    return new_table;
}

function getPositon(table)
{
    var position = [], X_coordinate, Y_coordinate,
    g = table[4],
    Wc = table[2],
    Hc = table[3],
    max_row = table[5],
    max_col = table[6];
   
    for(var y = 0; y < max_col; y++)
    {
        for(var x = 0; x < max_row; x++)
        {
            X_coordinate = g + (g + Wc) * x;
            Y_coordinate = g + (g + Hc) * y;
            position.push([X_coordinate, Y_coordinate]);
        }
    }
    return position;
}

var Wt = 50, Ht =  30, Wc = 8, Hc = 8, g = 1;
var table = createtable(Wt, Ht, Wc, Hc, g);
console.log(table);
var position;
var chess = 17;

if(chess > table[7])
{
    table = resize(table);
}

position = getPositon(table);
console.log(table, position);