var NavigatorHistoryControllerFactory = (function () {
    var instance;

    function createInstance() {
        return new NavigationHistoryController();
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

class NavigationHistoryController {

     constructor() {
        this.data = [];
        this.index = 0;
     }

    retrieve() {
        return this.data[this.index];
    }

    update(event, element) {
        switch (event) {
            case "PAGE_NAVIGATION_BY_MENU":
                this.invalidateUnreachableHistoryData();
                let newIndex = this.calculateNewIndex();
                this.addNewElement(newIndex, element);
                this.moveIndexToEnd();
                break;
            case "PAGE_NAVIGATION_BY_BROWSER_NATIVE_BACK_ARROW_BUTTON":
                this.moveIndexBack();
                break;
            case "PAGE_NAVIGATION_BY_BROWSER_NATIVE_FORWARD_ARROW_BUTTON":
                this.moveIndexForward();
                break;
        }
    }

    addNewElement(newIndex, element) {
        let lastNavigationElement = this.retrieve();
        if (lastNavigationElement != element) {
            this.data[newIndex] = element;
        }

    }

    invalidateUnreachableHistoryData() {
        this.data = this.data.slice(0, this.index+1);
    }

    calculateNewIndex() {
        return this.data.length;
    }

    moveIndexToEnd() {
        this.index = this.calculateNewIndex() - 1;
    }

    moveIndexBack() {
        if(this.index > 0) {
            this.index -= 1;
        }
    }
    
    moveIndexForward() {
       if(this.index < this.data.length-1) {
            this.index += 1;
       }
    }
}