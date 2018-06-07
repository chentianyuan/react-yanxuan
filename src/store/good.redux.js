// 每个redux文件一般包含以下模块

// 1,initState(可以为空)
let initState = {
    goodsName:'',
    price:'',
    imgSrc:''        
}

const CHOOSEGOODS = 'chooseGoods'

// 2,typeAction(需导出供使用)
export function chooseGoods(payload){
    return {
        type: CHOOSEGOODS,
        payload
    }
    // return new Promise((resolve,reject)=>{
    //     resolve({
    //         // 返回一个type
    //         type: CHOOSEGOODS,
    //         targetGoods
    //     })
    // })
}

// 3,reducer用于控制initState的变化情况
export function homeReducer(state = initState, action){
    // return了不必再break退出
    switch(action.type){
        case CHOOSEGOODS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}