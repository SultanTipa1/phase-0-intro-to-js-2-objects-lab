// Write your solution in this file!
// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with key and value without mutating the original object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee with key and value and mutate the original object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from employee without mutating the original object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from employee and mutate the original object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Market St');
  console.log(updatedEmployee); // { name: 'John Doe', streetAddress: '456 Market St' }
  console.log(employee); // { name: 'John Doe', streetAddress: '123 Main St' }
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '789 Broadway');
  console.log(employee); // { name: 'John Doe', streetAddress: '789 Broadway' }
  
  let employeeAfterDeletion = deleteFromEmployeeByKey(employee, 'name');
  console.log(employeeAfterDeletion); // { streetAddress: '789 Broadway' }
  console.log(employee); // { name: 'John Doe', streetAddress: '789 Broadway' }
  
  destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log(employee); // { streetAddress: '789 Broadway' }
  