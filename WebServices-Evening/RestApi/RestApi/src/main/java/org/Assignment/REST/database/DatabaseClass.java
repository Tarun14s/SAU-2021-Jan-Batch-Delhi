package org.assignment.REST.database;

import java.util.HashMap;
import java.util.Map;


import org.assignment.REST.model.Person;


public class DatabaseClass {

	private static Map<Long, Person> person= new HashMap<>();
	public static Map<Long, Person> getPerson(){
		return person;
	}

}