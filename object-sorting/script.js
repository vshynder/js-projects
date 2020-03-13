const weapon = [
  { id: 1, isReal: true, name: "Machine Gun", damage: 120 },
  { id: 2, isReal: false, name: "Bubble Gun", damage: 5 },
  { id: 3, isReal: false, name: "Catomet", damage: 15 },
  { id: 4, isReal: true, name: "Bow", damage: 60 },
  { id: 5, isReal: true, name: "Railgun", damage: 70 }
];
const people = [
  { name: "Ann", age: 12, weapon: 1 },
  { name: "Serg", age: 22, weapon: 2 },
  { name: "Lola", age: 62, weapon: 3 },
  { name: "Rikt", age: 52, weapon: 4 },
  { name: "Mila", age: 2, weapon: 5 },
  { name: "Tor", age: 11, weapon: 4 },
  { name: "Selen", age: 8, weapon: 3 }
];
//  Ann is 12 she is not adult, she has Machine Gun it is [LEGAL|INLEGAL].
// LIST SORT BY DAMAGE OF WEAPON. INLEGAL SITUATION IS HIGHER ON SORT.


let peopleCopy = [...people];

function combining(weaponObject, peopleObject) {
    for (let i = 0; i < peopleObject.length; i++) {
        const weaponOfPerson = peopleObject[i].weapon;
        for (let j = 0; j < weaponObject.length; j++) {
            if (weaponObject[j].id === weaponOfPerson) {
                peopleCopy[i].isReal = weaponObject[j].isReal;
                peopleCopy[i].gunName = weaponObject[j].name;
                peopleCopy[i].damage = weaponObject[j].damage;
            }
        }
    }
    return peopleCopy;
}

function sorting(peopleCopy) {
    // adding new key
    for (let i = 0; i < peopleCopy.length; i++) {
        if (peopleCopy[i].age < 18 && peopleCopy[i].isReal === true) {
            peopleCopy[i].forSorting = peopleCopy[i].damage * 100;
        } else {
            peopleCopy[i].forSorting = peopleCopy[i].damage;
        }
    }
    const sortedArray = [...peopleCopy];
    let tmp;
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = sortedArray.length - 1; j > i; j--) {
            if (sortedArray[j-1].forSorting > sortedArray[j].forSorting) {
                tmp = sortedArray[j-1];
                sortedArray[j-1] = sortedArray[j];
                sortedArray[j] = tmp;
            }
            
        }
    }
    return sortedArray;
}

function printing(peopleCopy) {
    let gender;
    let peopleAge;
    let isLegal;
    const result = [];

    for (let i = 0; i < peopleCopy.length; i++) {
        // Проверка имени
        if (peopleCopy[i].name === "Ann" || peopleCopy[i].name === "Lola" || peopleCopy[i].name === "Mila" || peopleCopy[i].name === "Selen") {
            gender = 'she';
        } else {
            gender = 'he';
        }
        
        // Проверка возраста
        if (peopleCopy[i].age < 18) {
            peopleAge = 'not adult';
        } else {
            peopleAge = 'adult';
        }

        // Проверка легальности
        if (peopleCopy[i].age < 18) {
            isLegal = 'INLEGAL';
        } else {
            isLegal = 'LEGAL';
        }
        result.unshift(peopleCopy[i].name + ' is ' + peopleCopy[i].age + ' ' + gender + ' is ' + peopleAge + ', ' + gender + ' has ' + peopleCopy[i].gunName + ' it is ' + isLegal);
    }
    return result;
}

const forPrint = printing(sorting(combining(weapon, people)));

for (let i = 0; i < forPrint.length; i++) {
    console.log(forPrint[i]);
}