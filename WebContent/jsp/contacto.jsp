<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contacto</title>
<link rel="stylesheet" href="css/contacto.css" type="text/css">
</head>
<body>
	<nav>
		<aside id="nav-redes">
			<a href="">
				<figure>
					<img src="">
				</figure>
			</a>
			<a href="">
				<figure>
					<img src="">
				</figure>
			</a>
		</aside>
		<main>
			<a href="">
				<figure>
					<img src="">
				</figure>
			</a>
		</main>
		<aside id="nav-movil">
			<button>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</aside>
	</nav>
	<main id="marca-tu-estilo">
		<header>
			<h1>
				<span>MARCAR<span id="un">un</span></span>
				<span id="estilo">ESTILO PROPIO</span>
			</h1>
		</header>
		<form>
			<div>
				<label for="nombre">Nombre</label>
				<input pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}"
						type="text" id="nombre" name="txtNombre"
						required minlength="3" maxlength="50">
			</div>
			<div>
				<label for="correo">E-Mail</label>
				<input type="email" id="correo" name="txtCorreo"
						minlength="11" maxlength="47" required
						pattern="[a-zA-Z0-9]{3,15}[@][a-zA-Z0-9]{3,15}[.][a-zA-Z0-9]{3,15}">
			</div>
			<div>
				<label for="mensaje">Mensaje</label>
				<textarea id="mensaje" name="txtMensaje"
							minlength="3" maxlength="1500" required
							pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]{10,1500}"></textarea>
			</div>
			<aside>
				<button type="submit" name="opcion" value="ema">Enviar</button>
			</aside>
		</form>
	</main>
	<footer>
		<header>
			<aside id="enlace-index">
				<a href="#index">
					<figure>
						<img src="">
					</figure>
				</a>
			</aside>
			<aside id="Paloma-Gimenez">
				<p>
					Paloma Giménez GL
				</p>
			</aside>
		</header>
		<aside>
			<section>
				<a href="porta.html" class="footer-header">PORTAFOLIO</a>
				<a href="">BLOG</a>
			</section>
			<section id="contacto">
				<a id="contactojsp" href="contacto.jsp" class="footer-header">CONTACTO</a>
				<a href="">
					<figure>
						<img src="">
					</figure>
					(+34) 605 351 033
				</a>
				<a href="">
					<figure>
						<img src="">
					</figure>
					paloma.gimenez.gl@gmail.com
				</a>
			</section>
			<section>
				<p class="footer-header">ENCUENTRAME EN</p>
				<aside>
					<figure>
						<img src="">
					</figure>
					<figure>
						<img src="">
					</figure>
					<figure>
						<img src="">
					</figure>
					<figure>
						<img src="">
					</figure>
				</aside>
			</section>
		</aside>
	</footer>
	<footer id="pie">
		<p>Paloma Gimenez © 2023</p>
	</footer>
</body>
</html>