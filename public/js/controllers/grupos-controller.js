angular.module('alurapic').controller('GruposController', function($scope, $http, recursoGrupo) {
	$scope.grupos = [];

	recursoGrupo.query(function(grupos) {
		$scope.grupos = grupos;
	}, function(error) {
		console.log(error);
	});
});