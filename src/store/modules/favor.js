/**
 * @file favor
 * @author  qiusiqi (qiusiqi@baidu.com)
 */

import * as types from '../mutation-types';

const localStorage = window.localStorage;
const FAVORITE_KEY = 'FAVORITE_NEWS';

let localList;
try {
    localList = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
}
catch (e) {
    localList = [];
}

export default {

    state: {
        newsFavorList: localList
    },

    actions: {
        // 收藏
        addFavorItem({commit, state}, detail) {
            let favorList = state.newsFavorList;

            favorList.push({
                title: detail.title,
                nid: detail.nid,
                time: Date.now()
            });

            localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorList));
            commit(types.SET_NEWS_FAVOR_LIST, favorList);
        },
        // 取消收藏
        removeFavorItem({commit, state}, detail) {
            let favorList = state.newsFavorList;

            favorList = favorList.filter((news, i) => {
                if (news.nid !== detail.nid) {
                    return true;
                }
            });

            localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorList));
            commit(types.SET_NEWS_FAVOR_LIST, favorList);
        },
        // 检测是否已收藏
        isFavored({commit, state}, detail) {
            let favorList = state.newsFavorList;

            favorList = favorList.filter((news, i) => {
                if (news.nid === detail.nid) {
                    return true;
                }
            });

            commit(types.SET_NEWS_DETAIL_FAVOR_STATUS, favorList.length > 0);
        }
    },

    mutations: {
        [types.SET_NEWS_FAVOR_LIST](state, favorList) {
            state.newsFavorList = favorList;
        },
        [types.SET_NEWS_DETAIL_FAVOR_STATUS](state, status) {
            state.detailPageFavorStatus = status;
        }
    }
};
