const { createUser } = require('./userCreator');

async function run() {
    try {
        const user = await createUser();
        console.log(`Hello ${user.username} you own a ${user.car.model} car which was manufactured in the year:${user.car.year}`);
    } catch (error) {
        console.error(error);
    }
}
// Executes in 5seconds
run();