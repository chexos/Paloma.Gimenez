drop database if exists paloma;
create database paloma;
use paloma;
create table usuario(
	cod_usu varchar(10) primary key,
    nom_usu varchar(10) not null unique,
    cla_usu varchar(10) not null
);
create table pagina(
	cod_pag int auto_increment primary key,
    pagina varchar(20) unique
);
create table mediaQuery(
	cod_med_que int auto_increment primary key,
    med_que varchar(6) unique
);
create table nav(
	cod_nav int auto_increment primary key,
    id varchar(20) unique
);
create table navEstilo(
	display varchar(20),
    flexFlow varchar(20),
    flexWrap varchar(20),
    width varchar(20),
    posi varchar(20),
    zIndex int,
    backgroundColor varchar(20),
    cod_pag int,
    cod_nav int,
    foreign key (cod_pag) references pagina (cod_pag),
    foreign key (cod_nav) references nav (cod_nav)
);
create table navEstiloHeight(
    height varchar(20),
	cod_med_que int,
    cod_nav int,
    foreign key (cod_med_que) references pagina (cod_med_que),
    foreign key (cod_nav) references nav (cod_nav)
);
create table navAside(
	cod_nav_asi int auto_increment primary key,
    id varchar(20) unique,
    posi varchar(10) unique
);
create table navAsideEstilo(
	display varchar(20),
    flexFlow varchar(20),
    flexWrap varchar(20),
    alignItems varchar(20),
    flex int,
    cod_pag int,
    cod_nav int,
    foreign key (cod_pag) references pagina (cod_pag),
    foreign key (cod_nav) references nav (cod_nav)
);
create table navAsideFigure(
	cod_nav_asi_fig int auto_increment primary key,
	cod_nav_asi_fig_img varchar(20),
    foreign key (cod_nav_asi_fig_img) references navAsideFigure (cod_nav_asi_fig_img)
);
create table navAsideFigureImage(
	cod_nav_asi_fig_ima int auto_increment primary key,
	id varchar(30) unique,
    enl varchar(150) unique,
    alt varchar(100) unique
);
create table navAsideFigureImageEstilo(
	cod_nav_asi_fig_ima_est int auto_increment primary key,
	height varchar(6) unique,
    width varchar(6) unique,
    cod_med_que int,
    foreign key (cod_med_que) references mediaQuerys (cod_med_que)
);
create table navAsideFigureImageDetalle(
    url_ima varchar(100) unique,
    cod_nav_asi_fig_ima int,
    cod_pag int,
    foreign key (cod_nav_asi_fig_ima) references navAsideFigureImage (cod_nav_asi_fig_ima),
    foreign key (cod_pag) references paginas (cod_pag)
);
create table navMainFigureImage(
	cod_nav_mai_fig_ima int auto_increment primary key,
    id_img varchar(30) unique,
    enl_det varchar(150) unique
);
create table navMainFigureImageEstilo(
    height varchar(6) unique,
    width varchar(6) unique,
    cod_med_que int,
    foreign key (cod_med_que) references mediaQuerys (cod_med_que)
);
create table navMainFigureImageDetalle(
    url_ima varchar(100) unique,
    cod_nav_mai_fig_ima int,
    cod_pag int,
    foreign key (cod_nav_asi_fig_ima) references navAsideFigureImage (cod_nav_asi_fig_ima),
    foreign key (cod_pag) references paginas (cod_pag)
);
insert into usuario values ('usuario001','paloma','ht73g4s6o2');
insert into pagina values (null,"index.jsp");
insert into pagina values (null,"porta.jsp");
insert into pagina values (null,"blog.jsp");
insert into pagina values (null,"contacto.jsp");
insert into mediaQuery values (null,"355px");
insert into mediaQuery values (null,"365px");
insert into mediaQuery values (null,"375px");
insert into nav values (null,"nav-movil");
insert into navEstilo values ("flex","row","wrap","100%","fixed",3,"rgba(0,0,0,0.9)",1);
insert into navEstilo values ("flex","row","wrap","100%","fixed",3,"white",2);
insert into navEstiloHeight values ("25px",1,1);
insert into navEstiloHeight values ("27.5px",2,1);
insert into navEstiloHeight values ("30px",3,1);
insert into navAsideFigureImage values (null,"img-instagram","https://instagram.com/paloma.gimenez.gl?igshid=MzRlODBiNWFlZA==");
insert into navAsideFigureImage values (null,"img-linkedin","https://www.linkedin.com/in/paloma-gimenez-garrido-lecca-b8128892/");
insert into navAsideFigureImageEstilo values (null,"20px","20px",1);
insert into navAsideFigureImageEstilo values (null,"21px","21px",2);
insert into navAsideFigureImageEstilo values (null,"22px","22px",3);
insert into navAsideFigureImageDetalle values ("icono-instagram-rosado-opaco.png",1,1);
insert into navAsideFigureImageDetalle values ("icono-instagram-gris-movil.png",1,2);
insert into navAsideFigureImageDetalle values ("icono-instagram-gris-movil.png",1,3);
insert into navAsideFigureImageDetalle values ("icono-instagram-gris-movil.png",1,4);
insert into navAsideFigureImageDetalle values ("icono-linkedin-rosado-opaco-movil.png",2,1);
insert into navAsideFigureImageDetalle values ("icono-linkedin-gris-movil.png",2,2);
insert into navAsideFigureImageDetalle values ("icono-linkedin-gris-movil.png",2,3);
insert into navAsideFigureImageDetalle values ("icono-linkedin-gris-movil.png",2,4);
insert into navMainFigureImage values (null,"img-index","index.jsp#index");
insert into navMainFigureImageEstilo values (null,"auto","50px",1);
insert into navMainFigureImageEstilo values (null,"auto","52.5px",2);
insert into navMainFigureImageEstilo values (null,"auto","55px",3);
insert into navMainFigureImageDetalle values ("icono-Paloma-Gimenez-rosado.png",1,1);
insert into navMainFigureImageDetalle values ("icono-Paloma-Gimenez-rosado.png",1,1);
delimiter $$
create procedure usp_validaAcceso(usr varchar(10), psw varchar(10))
begin
	select * from usuario where nom_usu = usr and cla_usu = psw;
end$$
delimiter ;
delimiter $$
create procedure usp_agregarNavAsideFigureImage(img varchar(20))
begin
	insert into navAsideFigureImage values (img);
end$$
delimiter ;