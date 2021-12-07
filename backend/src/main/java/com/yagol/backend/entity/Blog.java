package com.yagol.backend.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;

/**
 * @author yagol
 * @TIME 2021/12/6 - 7:33 下午
 * @Description
 **/
@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class Blog extends BaseEntity {
    String content;
}
