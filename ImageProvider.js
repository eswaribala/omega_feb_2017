var imageModule = angular.module('ImageModule', []);
imageModule.provider('test', function () {
   
    var Logo = '';

    
    this.setLogo = function (newLogo) {
        Logo = newLogo;
    };

    this.$get = function () {
        return {
          
            logo: Logo
        };
    };
});

//configuring provider----append provider to provider name
imageModule.config(function (testProvider) {
  
    testProvider.setLogo("images/omega.jpg");

});