const calc = (a,b,p) => {
    if (a == null || b == null || p == null) {
    return "Please provide all parameters";
    }
    switch(p) {
    case '+': {
    return a+b;
    break;
    }
    case '-': {
    return a-b;
    break;
    }
    case '*': {
    return a*b;
    break;
    }
    case '/': {
    return a/b;
    break;
    }
    default:{return;}
    }
}
exports.calc=calc;