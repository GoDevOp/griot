/**
 * Application routing
 */

app.config(['$routeProvider', function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'views/index.html',
    controller: 'mainCtrl',
    resolve: { resolvedNotes: function(notes) { return notes() } }
  }).when('/clusters/:cluster', {
    templateUrl: 'views/index.html',
    controller: 'clustersCtrl',
    resolve: { resolvedNotes: function(notes) { return notes() } }
  }).when('/o/:id', {
    templateUrl: 'views/object.html',
    controller: 'ObjectCtrl',
    resolve: {
      resolvedNotes: function(notes) { return notes() },
      resolvedObjectMeta: function(miaObjectMetaAdapter, $route) {
        return miaObjectMetaAdapter.get($route.current.params.id)
      }
    }
  }).when('/a/:id', {
    templateUrl: 'views/annotations.html',
    controller: 'notesCtrl'
  }).when('/stories/:id', {
    templateUrl: 'views/story.html',
    controller: 'storyCtrl'
  }).when('/goldweights', {
    templateUrl: 'views/goldweights.html',
    controller: 'goldweightsCtrl'
  }).otherwise({
    redirectTo: '/'
  })
}])

