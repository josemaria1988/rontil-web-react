import React from 'react'
import './Contacto.scss'
import baltazarConCorbata from '../../assets/img/baltazar.jpg'

const Contacto = () => {

    return (

        <main className="body-contacto">
            <section className="container-contacto">
                <div className="contacto-izquierdo">
                    <img className="imagen-contacto" src={baltazarConCorbata} alt="perritofachero" />
                    <div className="texto-imagen">En la oficina usamos corbata</div>
                </div>
                <div className="contacto-derecho">
                    <h1 className="contacto-title">Contactanos...</h1>
                    <form action="" className="formulario-contacto">
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Nombre</label>
                            <input className="input-contacto" type="text" name="name" placeholder="Nombre" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Email</label>
                            <input className="input-contacto" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Asunto</label>
                            <input className="input-contacto" type="subject" name="subject" placeholder="Asunto" />
                        </div>
                        <div className="contacto-input-wrapper">
                            <label className="contact-label">Mensaje</label>
                            <textarea className="input-contacto-mensaje" type="message" name="message" placeholder="Mensaje"></textarea>
                            <input type="submit" value="submit" className="input-contacto-enviar" />
                        </div>
                    </form>

                </div>
            </section>
        </main>
    )
}

export default Contacto