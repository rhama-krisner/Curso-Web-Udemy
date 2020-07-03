const funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[8]()
funcs[1]() // O resultado é sempre o mesmo por que var é de escopo global