//date 
const getAge = (yearOfBirth) => {
    const currentYear = (new Date()).getFullYear();/*getfullyear para obtener el año actual*/
    return currentYear - yearOfBirth;
}

console.log(getAge(1980));


