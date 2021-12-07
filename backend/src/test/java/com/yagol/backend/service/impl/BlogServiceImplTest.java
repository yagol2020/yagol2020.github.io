package com.yagol.backend.service.impl;

import com.yagol.backend.BackendApplicationTests;
import com.yagol.backend.entity.Blog;
import com.yagol.backend.service.BlogService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author yagol
 * @TIME 2021/12/6 - 7:58 下午
 * @Description
 **/
class BlogServiceImplTest extends BackendApplicationTests {

    @Autowired
    BlogService blogService;

    @Test
    public void testBlogMapper() {
        Blog blog = new Blog();
        blog.setContent("hi");
        blogService.save(blog);
        blog.setContent("no hi");
        blogService.updateById(blog);
    }

}
