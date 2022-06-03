package com.examen.api.examen.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examen.api.examen.model.Usuario;
import com.examen.api.examen.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    UsuarioRepository usuarioRepository;

    public List<Usuario> getLstUsuarios() {
        return usuarioRepository.getLstUsuarios();
    }
}
