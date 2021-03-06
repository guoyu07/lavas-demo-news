/**
 * @file app shell mutation types
 * @author huanghuiquan (huanghuiquanhhh@gmail.com)
 */

// please begin with `ADD`, `DELETE`, `UPDATE`

export const ENABLE_PAGE_TRANSITION = 'ENABLE_PAGE_TRANSITION';
export const DISABLE_PAGE_TRANSITION = 'DISABLE_PAGE_TRANSITION';
export const SET_PAGE_SWITCHING = 'SET_PAGE_SWITCHING';
export const SET_PAGE_TRANSITION_NAME = 'SET_PAGE_TRANSITION_NAME';
export const SET_APP_HEADER = 'SET_APP_HEADER';
export const SET_APP_BOTTOM_NAV = 'SET_APP_BOTTOM_NAV';
export const ACTIVATE_APP_BOTTOM_NAV = 'ACTIVATE_APP_BOTTOM_NAV';
export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';
export const SAVE_SCROLLTOP = 'SAVE_SCROLLTOP';
export const SET_SWIPE_OUT = 'SET_SWIPE_OUT';
export const UPDATE_OVERFLOW_SCROLLING_TOUCH = 'UPDATE_OVERFLOW_SCROLLING_TOUCH';
export const SET_USER_INFO = 'SET_USER_INFO';
export const ADD_SIDEBAR_BLOCKS = 'ADD_SIDEBAR_BLOCKs';
export const RM_SIDEBAR_BLOCKS = 'RM_SIDEBAR_BLOCKS';
export const UPDATE_SWIPE_BACK = 'UPDATE_SWIPE_BACK';

// home
export const SET_NEWS_DATA = 'SET_NEWS_DATA';
export const SET_LIST_FROM_CACHE = 'SET_LIST_FROM_CACHE';
export const SET_NEWS_LIST = 'SET_NEWS_LIST';
export const SET_NEWS_CATEGORY = 'SET_NEWS_CATEGORY';
export const SET_NEWS_ACTIVE_TAB = 'SET_NEWS_ACTIVE_TAB';
export const SET_NEWS_DETAIL = 'SET_NEWS_DETAIL';
export const ADD_QUERY_HISTORY = 'ADD_QUERY_HISTORY';
export const DELETE_QUERY_HISTORY = 'DELETE_QUERY_HISTORY';
export const SET_QUERY_RESULT = 'SET_QUERY_RESULT';
export const SET_PREVIEW_DATA = 'SET_PREVIEW_DATA';
export const DEL_CATEGORY = 'DEL_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

// search
export const UPDATE_RESULT = 'UPDATE_RESULT';

// favor
export const SET_NEWS_FAVOR_LIST = 'SET_NEWS_FAVOR_LIST';
export const ADD_FAVOR_ITEM = 'ADD_FAVOR_ITEM';
export const DELETE_FAVOR_ITEM = 'DELETE_FAVOR_ITEM';

// detail
export const UPDATE_DETAIL = 'UPDATE_DETAIL';
