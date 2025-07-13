function male(arr){
        return arr.age > 18 && arr.gender == "male";
}

function maleusingfilter(arr1){
    const arr2=arr1.filter(male);
    console.log("from original filter func");
    console.log(arr2);
    const arr3=arr1.filter(i => i.age > 18 && i.gender == "male");
    console.log("from arrow filter func");
    console.log(arr3);
}

const users = [{
    name: "A",
    age: "26",
    gender: "female"
},{
    name: "B",
    age: "26",
    gender: "male"
},{
    name: "C",
    age: "15",
    gender: "male"
}
]

male(users);
maleusingfilter(users);