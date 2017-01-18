angular.module('servicoFoto', ['ngResource']).factory('recursoFoto', function($resource) {
	return recursoFoto = $resource('v1/fotos/:fotoId', null, {
		update: {
			method: 'PUT'
		}
	});
})
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {
	var servico = {};

	var evento = 'fotoCadastrada';

	servico.cadastrar = function(foto) {
		return $q(function(resolve, reject) {
			if(foto._id ) {
				recursoFoto.update({fotoId: foto._id}, foto, function() {
				$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' atualizada com sucessos.',
						inclusao: false
					});
				}, function(error) {
					console.log(error);
					reject({
						mensagem: 'Erro ao alterar a foto ' + foto.titulo + '.'
					});
				});
			}else {
				recursoFoto.save(foto, function() {
				$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' includa com sucesso.',
						inclusao: true
					});
				}, function(error) {
					console.log(error);
					reject({
						mensagem: 'Erro ao incluir a foto ' + foto.titulo + '.'
					});
				});
			}
		});
	};

	return servico;
});

