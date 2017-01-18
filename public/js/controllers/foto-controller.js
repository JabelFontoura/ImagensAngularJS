angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroDeFotos, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';


	if ($routeParams.fotoId) {

		recursoFoto.get({
			fotoId: $routeParams.fotoId
		}, function(foto) {
			$scope.foto = foto;
		}, function(error) {
			console.log(error);
			$scope.mensagem = 'Não foi possível obter a foto';
		});
	}

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			cadastroDeFotos.cadastrar($scope.foto).then(function(result) {
				$scope.mensagem = result.mensagem;
				if (result.inclusao) $scope.foto = {};
			}).catch(function(error) {
				$scope.mensagem = error.mensagem;
			});
		}
	};


});