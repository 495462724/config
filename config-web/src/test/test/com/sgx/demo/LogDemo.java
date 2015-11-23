package test.com.sgx.demo;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by Developer on 2015/11/23.
 */
public class LogDemo {

    Logger logger = LoggerFactory.getLogger(LogDemo.class);

    @Test
    public void testConsole() {
        logger.debug("hello debug");
        logger.info("hello info");
        logger.error("hello error");
    }

}
