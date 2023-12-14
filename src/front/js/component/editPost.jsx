import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const EditPost = () => {
  
    const navigate = useNavigate();
  
    const handleSaveChanges = () => {
      
  
      navigate("/postviews");
    };

  return (
    <>
       <div className="donations-area d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="card bg-dark text-white" style={{ width: "400px" }}>
        <div className="card-body">
          <form className="container">
            <h1 className="text-center">Editar Publicacion</h1>
            <div className="mb-2">
              <label htmlFor="txtTitle" className="form-label">
                Título:
              </label>
              <input type="text" className="form-control" id="txtTitle" placeholder="Ingrese el título (máx. 20 caracteres)" maxLength="20" />
              <small className="text-muted">Máximo 20 caracteres</small>
            </div>

            <div className="mb-2">
              <label htmlFor="txtComment" className="form-label">
                Comentario:
              </label>
              <textarea className="form-control" id="txtComment" rows="3" placeholder="Ingrese el comentario (máx. 120 caracteres)" maxLength="120"></textarea>
              <small className="text-muted">Máximo 120 caracteres</small>
            </div>

            <div className="mb-2">
              <button onClick={handleSaveChanges} className="btn btn-primary btn-sm w-100">Guardar Cambios</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default EditPost;