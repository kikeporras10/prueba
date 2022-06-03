package com.examen.api.examen.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Usuario {
    
	private Long id;

	private String nombre;

	private Date fechaLogeo;
}
