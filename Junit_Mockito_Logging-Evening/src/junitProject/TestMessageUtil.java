package junitProject;

import org.junit.Test;
public class TestMessageUtil {
	MessageUtil messageUtil;

	public void setUp() {

		messageUtil=new MessageUtil("True");
	}

	@Test
	public void test1() {

		assertEquals("TrueMessage",messageUtil.test1("True"));
	}
}
