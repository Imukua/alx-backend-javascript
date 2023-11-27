export default function createReportObject(employeesList) {
    const reportObject = {
      allEmployees: {},
      getNumberOfDepartments(employeesList) {
        return Object.keys(employeesList).length;
      },
    };
  
    return reportObject;
  }
  