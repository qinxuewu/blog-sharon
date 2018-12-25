package cc.ryanc.halo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;

/**
 * <pre>
 *     Halo run!
 * </pre>
 *
 * @author : RYAN0UP
 * @date : 2017/11/14
 */
@Slf4j
@SpringBootApplication
@EnableCaching
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);

    }
}
