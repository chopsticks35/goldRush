angular.module('myApp', []);

angular.module('myApp')
    .controller('myController', ['$scope', function($scope){
        
			$scope.coordinates = [];
			$scope.doClick = function($event) {
                
//              this logs coordiantes only
//				var coords = {'x': 0, 'y': 0};
//				coords['x'] = $event.pageX;
//				coords['y'] = $event.pageY;
//              $scope.coordinates.push(coords);
//				console.log($scope.coordinates);
                
//              .spot with client or pageX top left
               
                $scope.spot = {  
                'top': $event.pageY + "px",
				'left': $event.pageX + "px",
			     }
                $scope.coordinates.push($scope.spot);
            
                console.log($scope.coordinates);
                console.log($event);
                console.log($scope.spot);
                
                $scope.removeIt = function($index){
                $scope.coordinates.splice($index, 1);
                }
            }
            
    
}])


      