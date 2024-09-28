const allDogs = [
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Busia",
        breed: "Husky",
        age: 7
    },
    {
        dogName: "Wolf",
        breed: "Bull-dog",
        age: 2
    },
    {
        dogName: "Anthony",
        breed: "Terrier, Pit Bull/Mix",
        age: 6
    },
    {
        dogName: "Axel",
        breed: "Terrier",
        age: 2
    },
    {
        dogName: "Baluna",
        breed: "Spayed Terrier",
        age: 6
    },
    {
        dogName: "Darry",
        breed: "Australian Cattle Dog/Mix",
        age: 0.9
    },
    {
        dogName: "Beanie",
        breed: "Terrier",
        age: 2
    },
    {
        dogName: "Bebe",
        breed: "Terrier",
        age: 6
    },
]



function showInfo() {
    let selecteDogs = [];

    let selectedDogAge = document.querySelector("#dogAge").value;
    
    allDogs.forEach((item) => {
        if (item.age >= selectedDogAge) { 
            selecteDogs.unshift(item);
        }
    });
    console.log(selecteDogs);
    let dogNames = selecteDogs.map(dog => dog.dogName).join(", ");
    let petArea = document.querySelector(".selectedAge");
    str = `Here are the dogs older then ${selectedDogAge} years, ${dogNames}`
    petArea.textContent = str

}

