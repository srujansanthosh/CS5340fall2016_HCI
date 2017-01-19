app.controller('budgetController', function ($scope, $mdSidenav, $rootScope, $location) {

    $rootScope.menuItem = "SET YOUR BUDGET";
    $scope.toggleLeft = buildToggler('left');

    $scope.init = function () {
        $rootScope.hideFilter=true;
    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.color = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
    };

    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;

    $scope.disabled1 = Math.floor(Math.random() * 100);
    $scope.disabled2 = 0;
    $scope.disabled3 = 70;

    $scope.invert = Math.floor(Math.random() * 100);

    $scope.isDisabled = true;

    $scope.sizes = [
        "10 Years",
        "15 Years",
        "30 Years"
    ];
    $scope.toppings = [
      { category: 'meat', name: 'Pepperoni' },
      { category: 'meat', name: 'Sausage' },
      { category: 'meat', name: 'Ground Beef' },
      { category: 'meat', name: 'Bacon' },
      { category: 'veg', name: 'Mushrooms' },
      { category: 'veg', name: 'Onion' },
      { category: 'veg', name: 'Green Pepper' },
      { category: 'veg', name: 'Green Olives' }
    ];
    $scope.selectedToppings = [];
    $scope.printSelectedToppings = function printSelectedToppings() {
        var numberOfToppings = this.selectedToppings.length;

        if (numberOfToppings > 1) {
            var needsOxfordComma = numberOfToppings > 2;
            var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
            var lastTopping = lastToppingConjunction +
                this.selectedToppings[this.selectedToppings.length - 1];
            return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
        }

        return this.selectedToppings.join('');
    };

    $scope.done = function () {
        console.log('budget done')
        $rootScope.budgetDone = true;
        $rootScope.showCheckCredit=false;
    }
});