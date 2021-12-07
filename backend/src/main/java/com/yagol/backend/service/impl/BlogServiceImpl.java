package com.yagol.backend.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yagol.backend.entity.Blog;
import com.yagol.backend.mapper.BlogMapper;
import com.yagol.backend.service.BlogService;
import com.yagol.backend.vto.BlogsInfo;
import org.springframework.stereotype.Service;

/**
 * @author yagol
 * @TIME 2021/12/6 - 7:57 下午
 * @Description
 **/
@Service
public class BlogServiceImpl extends ServiceImpl<BlogMapper, Blog> implements BlogService {

    @Override
    public BlogsInfo getBlogsInfo() {
        BlogsInfo blogsInfo = new BlogsInfo();
        blogsInfo.setTotal(count(null));
        return blogsInfo;
    }
}
