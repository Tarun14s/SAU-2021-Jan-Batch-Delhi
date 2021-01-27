package Assignment;

public class CalculatorClass {
	private CalculatorService service;

	   public void setCalculatorService(CalculatorService service){
	      this.service = service;
	   }

	   public double add(double input1, double input2){
	   	return service.add(input1, input2);
	   }
	   
	   public double subtract(double input1, double input2){
	   	return service.subtract(input1, input2);
	   }
	   
	   public double multiply(double input1, double input2){
	   	return service.multiply(input1, input2);
	   }
	   
	   public double divide(double input1, double input2){
	   	return service.divide(input1, input2);
	   }
}
