function mostProfitableDepartment(salesData) {
    var departments = {};
    for (var i = 0; i < salesData.length; i++) {
      if (departments[salesData[i].department]) {
        departments[salesData[i].department] += salesData[i].sales;
      } else {
        departments[salesData[i].department] = salesData[i].sales;
      }
    }
    var department = {department : '', sales : 0};
    for (var i in departments) {
      if (departments[i] >= department.sales) {
        department = {department : i, sales : departments[i]};
      }
    }
    return department.department;
  }
  function mostProfitableDay(salesData) {
    var days = {};
    for (var i = 0; i < salesData.length; i++) {
      if (days[salesData[i].day]) {
        days[salesData[i].day] += salesData[i].sales;
      } else {
        days[salesData[i].day] = salesData[i].sales;
      }
    }
    var day = {day : '', sales : 0};
    for (var i in days) {
      if (days[i] >= day.sales) {
        day = {day : i, sales : days[i]};
      }
    }
    return day.day;
  }