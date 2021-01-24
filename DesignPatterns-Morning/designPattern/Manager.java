package designPattern;

public class Manager extends Employee{
	public Manager(int id , String name , String notificationMode){
		setId(id) ; 
		setName(name) ; 
		setNotificationMode(notificationMode) ; 
		setDesignation("Manager") ; 
		setSalary(200000) ; 
	}
}
