function compareArrays(arr1, arr2) {
    let result = arr1.every(function(element,index){
    return (arr1.length === arr2.length && element===arr2[index]);
    });
    return result;
    }
    
    function getUsersNamesInAgeRange(users, gender) {
    if (Array.isArray(users) && users.length>0 && (users.findIndex(rez => rez.gender == gender)>-1)){
    let filteredUsers = users.filter(rez => rez.gender == gender);
    if (filteredUsers.length==0){
    return 0;
    } else {
    let result = filteredUsers.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / filteredUsers.length;
    return result;
    }
    } else {
    return 0;
    }
    }
    
    
  
    