import Assignment.TestingClass;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LoggingClass {
    private static Logger log= Logger.getLogger(LoggingClass.class);

   public static void main(String[] args) {
	  Layout layout = new PatternLayout("%p %d %C %M %n");
	  Appender app = new ConsoleAppender(layout);
	  log.addAppender(app);
	  log.info("info");
	  log.debug("debug");
	  log.fatal("fatal");
      Result result = JUnitCore.runClasses(TestingClass.class);
      for (Failure failure : result.getFailures()) {
         System.out.println(failure.toString());
      }
      System.out.println(result.wasSuccessful());
   }
}  