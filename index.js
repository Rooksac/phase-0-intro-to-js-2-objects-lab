const employee = {
    name:'Santa',
    streetAdress:'North Pole'
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const updatedEmployee = {...object};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}
function deleteFromEmployeeByKey(object, key) {
    const employeeMinusAddress = {...object};
    delete employeeMinusAddress[key];
    return employeeMinusAddress;
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}