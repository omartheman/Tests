const object = {
    name: 'Omar',
    hobbies: {
        sewing: {
            favorite: true,
        },
        hiking: {
            favorite: false,
            frequency: 'often',
        },
    },
}

const fishingFrequency = object.hobbies && object.hobbies.fishing && object.hobbies.fishing.frequency
console.log(fishingFrequency) // returns undefined 