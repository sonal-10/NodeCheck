// Import the module
const readline = require('readline');


// Constants for Units
LENGTH_UNITS = ['meters', 'kilometers', 'feet', 'miles'];
WEIGHT_UNITS = ['grams', 'kilograms', 'pounds'];
TEMPERATURE_UNITS = ['Celsius', 'Kelvin', 'Fahrenheit'];

// Objects which contain Conversion Rates
const lengthConversionRates = {
    meters: 1,
    kilometers: 0.001,
    feet: 3.28084,
    miles: 0.000621371,
};

const weightConversionRates = {
    grams: 1,
    kilograms: 0.001,
    pounds: 0.00220462,
};

/**
 * Converts length from one unit to another.
 * @param {number} value - The value to convert
 * @param {string} fromUnit - The unit of the input value 
 * @param {string} toUnit - The unit to be converted to
 * @returns {number} - The Converted value
 */

function convertLength(value, fromUnit, toUnit) {
    validateInput(value, fromUnit, toUnit, LENGTH_UNITS);
    return value * (lengthConversionRates[fromUnit] / lengthConversionRates[toUnit]);
}


function convertWeight(value, fromUnit, toUnit) {
    validateInput(value, fromUnit, toUnit, WEIGHT_UNITS);
    return value * (weightConversionRates[fromUnit] / weightConversionRates[toUnit]);
}


function convertTemperature(value, fromUnit, toUnit) {
    validateInput(value, fromUnit, toUnit, TEMPERATURE_UNITS);
    if (fromUnit == 'Celsius') {
        if (toUnit == 'Kelvin') return value + 273.15;
        if (toUnit == 'Faranheit') return (value + 9 / 5) + 32;
    }
    else if (fromUnit == 'Kelvin') {
        if (toUnit == 'Celsius') return value - 273.15;
        if (toUnit == 'Faranheit') return (value - 273.15) * 9 / 5 + 32;
    }
    else if (fromUnit == 'Faranheit') {
        if (toUnit == 'Celsius') return (value - 32) * 5 / 9;
        if (toUnit == 'Kelvin') return (value - 32) * 5 / 9 + 273.15;
    }
}

/**
 * Recieve User Input
 */

function getUserInput() {
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    reader.question('Enter the Value to Convert : ', (valueInput) => {
        reader.question('Choose a Conversion Type (Length, Weight, Temperature) : ', (conversionType) => {
            const value = parseFloat(valueInput);
            let validUnits;

            if (conversionType === 'Length') {
                validUnits = LENGTH_UNITS;
            }
            else if (conversionType === 'Weight') {
                validUnits = WEIGHT_UNITS;
            }
            else if (conversionType === 'Temperature') {
                validUnits = TEMPERATURE_UNITS;
            }
            else {
                console.error("Invaild Conversion");
                reader.close();
                return;
            }
            reader.question(`Enter the unit to convert from (${validUnits.join(',')}): `, (fromUnit) => {
                reader.question(`Enter the unit to convert to (${validUnits.join(',')}): `, (toUnit) => {
                    try {
                        let convertedValue;

                        if (conversionType == 'Length') {
                            convertedValue = convertLength(value, fromUnit, toUnit);
                        } else if (conversionType == 'Temperature') {
                            convertedValue = convertTemperature(value, fromUnit, toUnit);
                        } else if (conversionType == 'Weight') {
                            convertedValue = convertWeight(value, fromUnit, toUnit);
                        }

                        displayUserOutput(convertedValue);
                    }
                    catch (error) {
                        console.error(error.message);
                    }
                    reader.close();
                });
            });
        });
    });
}


/**
 * Validate User Input
 */

function validateInput(value, fromUnit, toUnit, validUnits) {
    if (isNaN(value)) {
        throw new Error("Value must be a Number");
    }
    if (!validUnits.includes(fromUnit) || !validUnits.includes(toUnit)) {
        throw new Error("Invalid Units");
    }
}

/**
 * Display the Converted value to the user output
 * @param {number} result - The Converted value
 */

function displayUserOutput(result) {
    console.log(`The Converted Value ${result}`);
}

/**
 * Start of Process
 */

getUserInput();