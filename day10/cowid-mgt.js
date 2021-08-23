 
 var app = angular.module('myApp', []);
 app.controller('myappCtrl', ['$scope', function($scope){
     
$scope.save=function(){
list=[];
            $scope.list=function(){
                clist=[];
                clist.name= pname.value;
                clist.age=Age.value;
                clist.mobile=ph.value;
                clist.adhaar=adhaar.value;
                clist.gender=gender.value;
                clist.location=Location.value;
                clist.datetime=datetime.value;
                list.push(clist);
                resultlist();
            }
        }
            function resultlist(){
    var data='';
    data="<tr><th>name</th><th>Age</th><th>mobile</th><th>Adhaar</th><th>Gender</th><th>Location</th></tr>";
    for(var i=0;i< list.length;i++){
        data=data+'<tr>'
        data=data+'<td>'+list[i].name+'</td>'+'<td>'+list[i].age+'</td>'+'<td>'+list[i].mobile+'</td>'+'<td>'+list[i].adhaar+'</td>'+'<td>'+list[i].gender+'</td>'+'<td>'+list[i].location+'</td>';
        data=data+'</tr>';
    }
    document.getElementById('res').innerHTML=data;
}
 }]);
