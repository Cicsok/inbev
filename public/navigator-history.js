var NavigatorHistoryFactory = (function () {
    var instance;

    function createInstance() {
        return new NavigatorHistory();
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



class NavigatorHistory {

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