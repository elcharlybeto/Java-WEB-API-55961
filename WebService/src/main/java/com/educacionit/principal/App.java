package com.educacionit.principal;

import javax.xml.ws.Endpoint;

import com.educacionit.servicios.ServicioBasico;

public class App {

	public static void main(String[] args) {
		Endpoint.publish("http://localhost:8081/servicio/suma", new ServicioBasico());
	}

}
