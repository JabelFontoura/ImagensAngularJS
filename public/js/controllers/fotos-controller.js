angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(error) {
		console.log(error);
	});


	$scope.remover = function(foto) {
		recursoFoto.delete({fotoId: foto._id}, function() {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto' + foto.titulo + ' removida com sucesso!';
		}, function(error) {
			$scope.mensagem = "Erro ao remover a foto " + foto.titulo;
			console.log(error);
		});
	};


	//Outras maneiras de fazer
	/* 
	var promise = $http.get('v1/fotos');
	promise.then(function(result){
		$scope.fotos = result.data;
	}).catch(function(error){
		console.log(error);
	});
	*/

	/*
	$http.get('v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(error){
		console.log(error);
	});
	*/

	/*
	$http.delete('v1/fotos/' + foto._id).success(function() {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto' + foto.titulo + ' removida com sucesso!';
		})
		.error(function(error) {
			$scope.mensagem = "Erro ao remover a foto " + foto.titulo;
			console.log(error);
		});
	*/	

});