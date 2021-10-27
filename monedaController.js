const app = angular.module('moneyApp', [])

app.controller('MonedaController', ['$scope', ($scope) => {

    $scope.converter = () => {
        let dolarPrice = 3771
        let euroPrice = 4373

        let vMoneyInput = $scope.moneyInput
        
        $scope.vDolar = (vMoneyInput / dolarPrice).toFixed(2)
        $scope.vEuro = (vMoneyInput / euroPrice).toFixed(2)
    }

}])