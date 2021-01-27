package Assignment;
import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class TestingClass {
   @InjectMocks
   CalculatorClass calc= new CalculatorClass();
   @Mock
   CalculatorService service;
   @Test
   public void testAdd(){
      when(service.add(70.0,10.0)).thenReturn(80.0);
      when(service.subtract(70.0,10.0)).thenReturn(60.0);
      when(service.multiply(70.0,10.0)).thenReturn(700.0);
      when(service.divide(70.0,10.0)).thenReturn(7.0);


      Assert.assertEquals(calc.add(70.0, 10.0),80.0,0);
      Assert.assertEquals(calc.subtract(70.0, 10.0),60.0,0);
      Assert.assertEquals(calc.multiply(70.0, 10.0),700.00,0);
      Assert.assertEquals(calc.divide(70.0, 10.0),7.0,0);
   }
}