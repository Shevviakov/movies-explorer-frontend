class AppUtils {
    getInitialCardsCount() {
        const w = window.innerWidth
        switch (true) {
            case (w > 1000):
                return 12
            case (w <= 600):
                return 5
            default:
                return 8
        }
    }

    getCardsCountIncrement() {
        if (window.innerWidth > 1000) {
            return 3
        } else {
            return 2
        }
    }
}

const utilsObj = new AppUtils()

export default utilsObj