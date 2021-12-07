package com.yagol.backend.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yagol.backend.entity.Blog;
import com.yagol.backend.vto.BlogsInfo;
import org.springframework.stereotype.Service;

/**
 * @author yagol
 * @TIME 2021/12/6 - 7:56 下午
 * @Description
 **/
public interface BlogService extends IService<Blog> {
    BlogsInfo getBlogsInfo();
}
