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
                this.add(newIndex, element);
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

    add(newIndex, element) {
        this.data[newIndex] = element;
    }

    invalidateUnreachableHistoryData() {
        this.data = this.data.slice(0, this.index);
    }

    calculateNewIndex() {
        return this.data.length;
    }

    moveIndexToEnd() {
        this.index = this.calculateNewIndex() - 1;
    }

    moveIndexBack() {
        this.index -= 1;
    }

    moveIndexForward() {
        this.index += 1;
    }
}