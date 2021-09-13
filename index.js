let formElem = document.randomList.elements;
let one = formElem[0];
let two = formElem[1];
let min = 1;
let max = 15;
let res = document.getElementById("res");
let oneRes = document.getElementById("oneRes");
let twoRes = document.getElementById("twoRes");
one.oninput = function(){result(fillArr(min,max,+one.value,"one"),oneRes,sumArrX(ar1,ar2,ar3),res)};
two.oninput = function(){result(fillArr(min,max,+two.value,"two"),twoRes,sumArrX(ar1,ar2,ar3),res)};
let ar1 = [];
let ar2 = [];
let ar3 = [];

function fillArr(min,max,howMany,action){
	ar3 = [];
	//Заполнить масив случайными числами
	if(action == "two"){
		ar2 = [];
		for(let i = 0 ; i < howMany ; i++){
			ar2[i] = random(min,max);
		};
		return ar2;
	}else if(action == "one"){
		ar1 = [];
		for(let i = 0 ; i < howMany ; i++){
			ar1[i] = random(min,max);
		};
		return ar1;
	} 
};

function random(min,max){
	//Функция рандом уточнить!!!!
	let result = (min-0.5)+Math.random()*(max-min+1);
	return Math.round(result);
};

function sumArrX(array1,array2,array3){
//Создает масив с 2 массивов с распределением
let big = bigArr(array1,array2);//Переменная для сокращения кода
let little = littleArr(array1,array2);//Переменная для сокращения кода
	for(let i = 0 ; i < big.length ; i++){
		// Заполняем масив через метод push
		//Поставили if защиту в случае если один массив больше 
		if(little.length > i){
			array3.push(array1[i]); 
			array3.push(array2[i]); 
		}else{
			array3.push(big[i]);
		};
	};
	return array3;
};

function bigArr(arr1,arr2){
	//Выводим большой массив из 2
	if(arr1.length>arr2.length){
		return arr1;
	}else{
		return arr2;
	};
};

function littleArr(arr1,arr2){
	//Выводим маленький массив из 2
	if(arr1.length < arr2.length){
		return arr1;
	}else{
		return arr2;
	};
};
function result(what1,where1,what2,where2){
	where1.innerHTML = what1;
	where2.innerHTML = what2;
};
