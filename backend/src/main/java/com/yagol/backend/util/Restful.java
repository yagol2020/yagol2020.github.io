package com.yagol.backend.util;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author yagol
 * @TIME 2021/12/6 - 8:28 下午
 * @Description
 **/
@Data
@AllArgsConstructor
public class Restful<T> {
    Integer code;
    T data;
    String message;
    Boolean success;
}
