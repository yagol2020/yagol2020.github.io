package com.yagol.backend.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yagol.backend.entity.Blog;
import com.yagol.backend.service.BlogService;
import com.yagol.backend.util.Restful;
import com.yagol.backend.util.RestfulFactory;
import com.yagol.backend.vto.BlogsInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * @author yagol
 * @TIME 2021/12/6 - 8:26 下午
 * @Description
 **/
@Slf4j
@RestController
@RequestMapping("api/blog")
public class BlogCtl {
    BlogService blogService;

    BlogCtl(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping("get")
    public Restful<Blog> getBlogById(@RequestParam("id") Integer id) {
        return RestfulFactory.ok(blogService.getById(id));
    }

    @PostMapping("list")
    public Restful<Page<Blog>> getBlogs(@RequestBody Page<Blog> page) {
        log.info("请求页面：{}", page.getCurrent());
        return RestfulFactory.ok(blogService.page(page));
    }

    @GetMapping("blogsInfo")
    public Restful<BlogsInfo> getBlogsInfo() {
        log.info("请求获得博客总数");
        return RestfulFactory.ok(blogService.getBlogsInfo());
    }
}
