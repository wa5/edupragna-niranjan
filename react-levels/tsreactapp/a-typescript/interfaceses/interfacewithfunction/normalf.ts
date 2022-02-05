//problem
//explicitly telling the properties

function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

//solution
//It’s worth pointing out that the type checker does not require that these ////properties come in any sort of order, only that the properties the interface requires are present and have the required type.
interface LabeledValue {
    label: string;
}

function printLabel2(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj1 = { size: 10, label: 'Size 10 Object' };
printLabel2(myObj1);
