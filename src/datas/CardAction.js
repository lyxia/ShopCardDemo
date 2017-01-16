import ShopCardActionTypes from './ShopCardActionTypes'

function toggleCardChecked(index) {
    return {
        type:ShopCardActionTypes.TOGGLE_SHOP,
        index
    }
}

function checkedAllCard() {
    return {
        type:ShopCardActionTypes.CHECKED_ALL_SHOP
    }
}

function unCheckAllCard() {
    return {
        type:ShopCardActionTypes.UN_CHECKED_ALL_SHOP
    }
}

function decreasingCard(index) {
    return {
        type:ShopCardActionTypes.DECREASING_SHOP,
        index:index
    }
}

function increasingCard(index) {
    return {
        type:ShopCardActionTypes.INCREASING_SHOP,
        index:index
    }
}

module.exports = {
    toggleCardChecked, 
    checkedAllCard,
    unCheckAllCard,
    decreasingCard,
    increasingCard
}