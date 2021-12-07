package com.yagol.backend.util;

import cn.hutool.core.util.StrUtil;

/**
 * @author yagol
 * @TIME 2021/12/6 - 8:29 下午
 * @Description
 **/
public class RestfulFactory {
    final static Integer SUCCESS_CODE = 200;

    public static <T> Restful<T> ok(T data) {
        return new Restful<T>(SUCCESS_CODE, data, StrUtil.EMPTY,true);
    }
}
