package com.educacionit.DAO;

import com.educacionit.entidades.Usuario;
import com.educacionit.implementaciones.mariadb.UsuarioImplmentacion;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		Usuario usuario = null;
		UsuarioImplmentacion impl = new UsuarioImplmentacion();
		
		usuario = impl.buscar("user1@gmail.com");
		
		System.out.println(usuario);
		
	}
}