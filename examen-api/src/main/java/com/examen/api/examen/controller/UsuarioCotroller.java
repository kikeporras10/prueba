package com.examen.api.examen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examen.api.examen.model.Usuario;
import com.examen.api.examen.service.UsuarioService;

@CrossOrigin    
@RestController
public class UsuarioCotroller {
    
    @Autowired
    UsuarioService usuarioService;

    @GetMapping("/getUsuarios")
    public List<Usuario> getUsuarios() {
        return usuarioService.getLstUsuarios();
    }
    
}
