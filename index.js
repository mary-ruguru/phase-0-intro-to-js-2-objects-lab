// Write your solution in this file!
const employee = {
    name: "sam",
    streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}



//const employee = {}
//let streetAddress = {}

//function updateEmployeeWithKeyAndValue(employee, key, value){
 //   for(const key in employee){
 //       delete employee[key];
  //  }
  //  employee.name = 'Sam';
  //  streetAddress = '11 Broadway'

  //  return Object.assign({}, employee, { [key]: value });
//}

//function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   // employee[key] = value;
   // employee.name= 'Sam';
    //streetAddress = '12 Broadway'
    //return employee;
//}
//function deleteFromEmployeeByKey(employee, key){
  //  const NEW_Employee = Object.assign({}, employee);
    //delete NEW_Employee[key];
   // return NEW_Employee;
//}
//function destructivelyDeleteFromEmployeeByKey(employee, key){
 //   Object.assign({}, employee);
  //  delete employee[key];
  //  return employee;
//}



//describe('employees', function() {
  //  describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
  //    beforeEach(function () {
   //     for (const key in employee) {
   //       delete employee[key];
   //     }
  
   //     employee.name = 'Sam';
  //    });
  
   //   it('returns an employee with the original key value pairs and the new key value pair', function () {
  //      expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
  //        name: 'Sam',
     //     streetAddress: '11 Broadway'
//});
   //   });