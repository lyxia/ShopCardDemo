import ShopCardActionTypes from '../datas/ShopCardActionTypes'
import Immutable from 'immutable'

const cartData =[
    {
    id:1,
    name:'【京东超市】德芙Dove福气盈门糖果巧克力礼盒年货大礼包968g',
    price:89,
    count:1,
    img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4036/365/1167327620/217673/6e569b6/586b8abeN9ce2ab4b.jpg!q70.jpg',
    checked:true,
    },
    {
    id:2,
    name:'【京东超市】德芙Dove福气盈门糖果巧克力礼盒年货大礼包968g',
    price:89,
    count:1,
    img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4036/365/1167327620/217673/6e569b6/586b8abeN9ce2ab4b.jpg!q70.jpg',
    checked:true,
    }
] 

function getInitState() {
    return Immutable.fromJS(cartData)
}

function shopCard(state = getInitState(), action) {
    switch(action.type) {
        case ShopCardActionTypes.TOGGLE_SHOP:
            return state.update(
                action.index,
                card => card.set('checked', !card.get('checked'))
            )
        case ShopCardActionTypes.CHECKED_ALL_SHOP:
            return state.map(card=>{
                return card.set('checked', true)
            })
        case ShopCardActionTypes.UN_CHECKED_ALL_SHOP:
            return state.map(card=>{
                return card.set('checked', false)
            })
        case ShopCardActionTypes.DECREASING_SHOP:
            if(state.get(action.index).get('count') > 0) {
                return state.update(action.index,(value)=>value.set('count', value.get('count')-1))
            }
            return state
        case ShopCardActionTypes.INCREASING_SHOP:
            return state.update(action.index,(value)=>value.set('count', value.get('count')+1))
        default:
            return state
    }
}

module.exports = shopCard