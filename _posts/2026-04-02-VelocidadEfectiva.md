---
title: "Velocidad efectiva y condiciones de energía"
layout: post
categories: Articulo
---
![](/assets/images/VelocidadEfectiva/portada (1).png)
Este artículo refiere a la investigación que presenté como trabajo de Grado para obtener el título de Físico en la Universidad de Antioquia. Es básicamente una versión escrita de la exposición que hice como parte del requisito de Graduación.

Mi trabajo fue asesorado por el profesor Antonio Enea Romano y en realidad consistió de una variedad de tópicos, el de velocidad efectiva es simplemente el que elegimos mostrar ese día. El artículo que salió de esto puede ser encontrado en [arXiv.2602.22023](https://doi.org/10.48550/arXiv.2602.22023) y existe una versión con el mismo contenido pero con detalles y comentarios extras de mi parte en la [bilbioteca digital udea](https://bibliotecadigital.udea.edu.co/bitstreams/5df83cba-a27a-41c1-94aa-0b23cecdab00/download).

## Introducción
El cuadro de la velocidad Efectiva fue introducido por Antonio E.R en [[2301.05679] Effective speed of cosmological perturbations](https://arxiv.org/abs/2301.05679). Dediqué un buen tiempo a estudiarlo, verificarlo y en general a jugar con él. Mi mayor interés era encontrar una formulación más formal (geométrica) y/o una aplicación verdaderamente útil. En el proceso encontramos que sucede algo interesante en el contexto de [Condiciónes de energía](https://es.wikipedia.org/wiki/Condici%C3%B3n_de_energ%C3%ADa); básicamente al pasar al cuadro efectivo, condiciones que antes eran violadas aparentemente son satisfechas trivialmente.

A continuación explico en detalle estos dos conceptos (velocidad efectiva y condiciones de energía.)
## Velocidad efectiva
Tomen una ecuación de onda cualquiera, tal vez tiene un termino de amortiguamiento si quieren. Adicionalmente introduzcan un termino de fuente (lado derecho de la igualdad):
$$
    \square\zeta = \zeta''+2\nu\zeta'-v_s^2\nabla^2\zeta = \Pi(\mathbf{r},t).
$$
Este termino de fuente puede venir de una interacción con otro campo o un potencial raro, no importa.

Digamos ahora que $\hat{\zeta}$ es una solución de esta ecuación y por lo tanto se cumple la identidad
$$
    \hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -\Pi(\mathbf{r},t) =0,
$$
que podemos manipular hasta una ecuación equivalente como 
$$
\hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -\left(  \int_{-\infty}^{t} \Pi(\mathbf{r},\eta)  \mathrm{d}\eta  \right)'=0\\
$$
$$
    =\hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -g'\\
$$
$$
=\left( \hat{\zeta}'(1-\frac{g}{\hat{\zeta}'}) \right)' +2\nu \hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta}
$$
Donde hemos definido a $g$ como la antiderivada de $\Pi$ . Bajo la definición de **velocidad efectiva** como la cantidad
$$
    v_e^2 = {v_s^2}\left(1-\frac{g}{\hat{\zeta}'}\right)^{-1},
$$
reemplazando en la ecuación anterior y multiplicando ambos lados por $\frac{v_{e}^{2}}{v_s^{2}}$  se llega a la ecuación
$$
\rightarrow \hat{\zeta}''+\hat{\zeta}'\left( 2\nu\frac{v_e^2}{v_s^2} -2\frac{v_e'}{v_e}\right) -v_e^2\nabla^2 \hat{\zeta} =0.
$$
A la cantidad en paréntesis le podemos llamar coeficiente de amortiguación efectivo $\nu_{eff}$ si se desea. El punto es que hemos llegado a una identidad en terminos de $\hat{\zeta}$, demostrando que $\hat{\zeta}$, la solución original, también resuelve la ecuación homogénea
$$
        \zeta''+2\nu_{\mathrm{eff} }\zeta'-v_e^2\nabla^2 \zeta =0,
$$
A la cual llamamos **ecuación efectiva**.

Podemos ver la motivación detrás de llamar $v_{e}$ "velocidad efectiva", ya que esta cantidad reemplaza el rol que tomaba la constante $v_{s}$ en la ecuación original.

Los efectos del termino de fuente no han desaparecido, ahora están codificados en $v_{e}$ la cual es una función en general del espacio y el tiempo.

Si están familiarizados, esto es similar a cuando hablamos de [Índice de refracción](https://es.wikipedia.org/wiki/%C3%8Dndice_de_refracci%C3%B3n) para ondas electromagnéticas. Decimos que La velocidad de un rayo de luz cambia de magnitud y dirección al transmitirse por un dieléctrico pero esto también en cierta forma es una explicación efectiva que esconde lo que en verdad está pasando microscópicamente. La luz siempre se mueve a la velocidad de la luz pero en un dieléctrico hay una innumerable cantidad de interacciones con las componentes del material, i.e., términos de fuente. De hecho, en el pasado me he preguntado si sería posible replicar este proceso en las ecuaciones de Maxwell macroscópicas y ver si uno puede recuperar el índice de refracción de esta forma, pero sigo sin estar seguro qué tan complejo sea hacerlo.

Tal vez están pensando que lo que acabamos de hacer es una trivialidad y eso es porque lo es. Pero es una trivialidad que funciona.
### Aplicación de Ejemplo
![](/assets/images/VelocidadEfectiva/hp.png)

![](/assets/images/VelocidadEfectiva/zeta.png)
### Geometría
## Condiciones de Energía

### Aplicación de Ejemplo
### Pasando al cuadro efectivo

## Conclusión
