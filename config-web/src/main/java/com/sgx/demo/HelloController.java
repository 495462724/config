package com.sgx.demo;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2015/5/20 0020.
 */
public class HelloController extends Controller {
    public void index() {
        renderText("Hello JFinal World.");
    }
}