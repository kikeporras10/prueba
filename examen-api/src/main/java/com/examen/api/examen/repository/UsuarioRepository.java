package com.examen.api.examen.repository;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.stereotype.Repository;

import com.examen.api.examen.model.Usuario;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Repository
public class UsuarioRepository {

    /**
     * LOGGER.
     */
    public static final Logger LOGGER = Logger.getLogger(UsuarioRepository.class.getName());
    
    /**
     * Ruta de la fuente de datos Json.
     */
    private static final String USUARIOS_JSON = "/data/usuarios.json";

    /**
     * Obtiene Lista de usuarios del archivo .json.
     * @return Lista de objetos Usuario.
     */
    public List<Usuario> getLstUsuarios() {
        List<Usuario> lst = null;
        try {
            TypeReference<List<Usuario>> typeReference =  new TypeReference<List<Usuario>>() {};
            InputStream inputStream = TypeReference.class.getResourceAsStream(USUARIOS_JSON);
            lst = new ObjectMapper().readValue(inputStream, typeReference);
        } catch (Exception ex) {
            LOGGER.log(Level.SEVERE, "Error obtener los usuarios.", ex);
        }
        return lst;
    }

}
