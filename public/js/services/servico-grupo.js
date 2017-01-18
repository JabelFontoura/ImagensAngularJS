angular.module('servicoGrupo', ['ngResource']).factory('recursoGrupo', function($resource) {
	return recursoFoto = $resource('v1/grupos/:grupoId', null, {

	});
});