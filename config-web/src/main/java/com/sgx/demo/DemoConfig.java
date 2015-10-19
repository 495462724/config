package com.sgx.demo;

import com.jfinal.config.*;

/**
 * Created by Administrator on 2015/5/20 0020.
 */
public class DemoConfig extends JFinalConfig {
    public void configConstant(Constants me) {
        me.setDevMode(true);
    }

    public void configRoute(Routes me) {
        me.add("/hello", HelloController.class);
    }

    public void configPlugin(Plugins me) {
    }

    public void configInterceptor(Interceptors me) {
    }

    public void configHandler(Handlers me) {
    }
}
