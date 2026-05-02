---
title: "Velocidad efectiva y condiciones de energía"
layout: post
categories: Articulo
toc: true
banner: "![](/assets/images/VelocidadEfectiva/portada.png)"
---
Este artículo refiere a parte de la investigación que realicé al final de mi Pregrado en Física en la UdeA. Es básicamente una versión escrita de la exposición que hice como parte del requisito de Graduación. Por lo tanto, no hay mucho esfuerzo en explicar conceptos matemáticos y físicos que puede que muchos no entiendan. Se asume que se entiende algo de cálculo, ecuaciones diferenciales y relatividad. Entiendo que esto puede ser una asunción grande, pero el objetivo era más plasmar este contenido en cualquier lado del internet (más sobre esto en el siguiente párrafo) y no tanto dar una clase. Perdonen aún así mi ajenidad.

La razón de compartir esto es porque siempre he sido un defensor de tener más transparencia en la academia, sobre todo dentro las universidades publicas. Mi filosofía al respecto tal vez la discuta más a detalle en otro lado más apropiado, pero básicamente lo que creo es que los científicos deberían ser más abiertos a compartir y hablar en línea sobre sus proyectos y que debería haber una forma sencilla y directa para el publico de saber en qué tipo de cosas los recursos de investigación están siendo destinados. Este trabajo está lejos de caer dentro de esa categoría (fue básicamente tarea lol), pero igualmente lo comparto para coger hábito y dar ejemplo.

Mi trabajo fue asesorado por el professor Antonio Enea Romano y en realidad consistió de una variedad de tópicos, el de velocidad efectiva es simplemente el que elegimos mostrar ese día. El preprint que salió de esto puede ser encontrado en [arXiv.2602.22023](https://doi.org/10.48550/arXiv.2602.22023), una versión del mismo escrito más personal se encuentra en [energy-effective-gaussian](https://restrepokevin-2026-energy-effective-gaussian.tiiny.site).

## Introducción

El cuadro de la velocidad Efectiva fue introducido por Antonio E.R en [[2301.05679] Effective speed of cosmological perturbations](https://arxiv.org/abs/2301.05679). Dediqué un buen tiempo a estudiarlo, verificarlo y en general a jugar con él. Mi mayor interés era encontrar una formulación más formal (geométrica) y/o una aplicación verdaderamente útil. En el proceso encontramos que sucede algo interesante en el contexto de [Condiciónes de energía](https://es.wikipedia.org/wiki/Condici%C3%B3n_de_energ%C3%ADa); básicamente al pasar al cuadro efectivo, condiciones que antes eran violadas aparentemente son satisfechas trivialmente.

A continuación entro en más detalle sobre estos dos conceptos: velocidad efectiva y condiciones de energía.

## Velocidad efectiva

Tomen una ecuación de onda cualquiera, tal vez incluso tiene un termino de amortiguamiento, y adicionalmente introduzcan un termino de fuente (lado derecho de la igualdad):

$$
    \square\zeta = \zeta''+2\nu\zeta'-v_s^2\nabla^2\zeta = \Pi(\mathbf{r},t).
$$

Este termino de fuente puede venir de una interacción con otro campo o un potential de fondo raro, esto no importa.

Digamos ahora que $$\hat{\zeta}$$ es una solución de esta ecuación y por lo tanto se cumple la identidad

$$
    \hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -\Pi(\mathbf{r},t) =0,
$$

que podemos manipular hasta una ecuación equivalente como

$$
\hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -\left(\int_{-\infty}^{t} \Pi(\mathbf{r},\eta)  \mathrm{d}\eta  \right)'=0\\
$$

$$
    =\hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -g'\\
$$

$$
=\left(\hat{\zeta}'(1-\frac{g}{\hat{\zeta}'}) \right)' +2\nu \hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta}
$$

Donde hemos definido a $$g$$ como la antiderivada de $$\Pi$$. Bajo la definición de **velocidad efectiva** como la cantidad

$$
    v_e^2 = {v_s^2}\left(1-\frac{g}{\hat{\zeta}'}\right)^{-1},
$$

reemplazando en la ecuación anterior y multiplicando ambos lados por $$\frac{v_{e}^{2}}{v_s^{2}}$$  se llega a la ecuación

$$
\rightarrow \hat{\zeta}''+\hat{\zeta}'\left(2\nu\frac{v_e^2}{v_s^2} -2\frac{v_e'}{v_e}\right) -v_e^2\nabla^2 \hat{\zeta} =0.
$$

A la cantidad en paréntesis le podemos llamar coeficiente de amortiguación efectivo $$\nu_{eff}$$ si se desea. El punto es que hemos llegado a una identidad en términos de $$\hat{\zeta}$$, demostrando que $$\hat{\zeta}$$, la solución original, también resuelve la ecuación homogénea:

$$
        \zeta''+2\nu_{\mathrm{eff} }\zeta'-v_e^2\nabla^2 \zeta =0.
$$

A la cual llamamos **ecuación efectiva**.

Podemos ver la motivación detrás de llamar $$v_{e}$$ "velocidad efectiva", ya que esta cantidad reemplaza el rol que tomaba la constante $$v_{s}$$ en la ecuación original.

Los efectos del termino de fuente no han desaparecido, ya que ahora están codificados en $$v_{e}$$ la cual es una función en general del espacio y el tiempo.

Si están familiarizados, esto es similar a cuando hablamos de [Índice de refracción](https://es.wikipedia.org/wiki/%C3%8Dndice_de_refracci%C3%B3n) para ondas electromagnéticas. Decimos que la velocidad de un rayo de luz cambia de magnitud y dirección al transmitirse por un dieléctrico pero esto también en cierta forma es una explicación efectiva que esconde lo que en verdad está pasando microscópicamente. La luz siempre se mueve a la velocidad de la luz pero en un dieléctrico hay una innumerable cantidad de interacciones con las distintas componentes del material, i.e., términos de fuente. De hecho, en el pasado me he preguntado si sería posible replicar este proceso en las ecuaciones de [Maxwell macroscópicas](https://es.wikipedia.org/wiki/Ecuaciones_de_Maxwell) y ver si uno puede recuperar el índice de refracción de esta forma, pero sigo sin estar seguro qué tan complejo sea hacerlo.

Puede que estén pensando que lo que acabamos de hacer es una trivialidad, y eso es porque lo es. Pero es una trivialidad que funciona.

### Aplicación de ejemplo

Consideremos por ejemplo la situación para la que inicialmente se formuló el cuadro de velocidad efectiva: La evolución de perturbaciones escalares y perturbaciones tensoriales (u ondas gravitacionales) en cosmología.

A bajo orden estos dos tipos de perturbaciones son independientes y se comportan como [campos libres](https://en.wikipedia.org/wiki/Free_field). A tercer orden esto deja de ser así: perturbaciones tensoriales y escalares se acoplan y su evolución es descrita por las siguientes ecuaciónes:

$$
            \zeta''+2 \frac{z'}{z}\zeta'-\nabla^2\zeta=-2h_{ij}\partial_i\partial_j\zeta
$$

$$
            h_{ij}''+2 \mathcal{H} h_{ij}'-\nabla^2h_{ij}=\epsilon\partial_i\zeta\partial_j\zeta
$$

Nada sobre perturbaciones cosmológicas y su descomposición entre modos escalares, vectoriales y tensoriales es necesario que se entienda para este artículo. Lo único que importa es que se tiene algún campo cuya ecuación de movimiento tiene la forma de una ecuación de onda (en este caso $$\zeta$$ y las dos polarizaciones de $$h_{ij}$$: $$h_{+}, h_{\times}$$) y que las ecuaciones correspondientes a estos campos poseen algún termino de fuente. En este ejemplo el termino de fuente proviene de la interacción mutua entre las perturbaciones escalares y tensoriales ($$\zeta$$ y $$h_{ij}$$).

Debido a que hay un termino de fuente, este lo podremos caracterizar con la velocidad efectiva. Pero en la práctica es más simple resolver para los modos de Fourier de los campos, entonces en realidad las ecuaciones lucen así:

$$
            \zeta''+2 \frac{z'}{z}\zeta'+k^2\zeta=2h_{ij}k_i k_j\zeta
$$

$$
            h_{ij}''+2 \mathcal{H} h_{ij}'+k_h^2h_{ij}=-\epsilon k_i k_j\zeta^2
$$

Pasar al cuadro efectivo se hace exactamente en la misma forma que antes, sólo que ahora se obtendrá una velocidad efectiva dependiente del tiempo y el **momento**: $$v_{e}(t,\mathbf{r})\to v_{e}(t,\mathbf{k})$$.

Resolvamos un caso muy simplificado en donde $${\epsilon \approx 0}$$ ([De Sitter](https://es.wikipedia.org/wiki/Espacio-tiempo_de_De_Sitter)). Resolviendo numéricamente, la solución para los modos $$h_{+}$$ y $$\zeta$$ luce:

<div markdown ="1" class= "gallery">
![](/assets/images/VelocidadEfectiva/hp.png)

![](/assets/images/VelocidadEfectiva/zeta.png)
</div>

Por otro lado, siguiendo el procedimiento anterior y solucionando la ecuación efectiva correspondiente se obtiene
<div markdown= "1" class = "gallery">
![](/assets/images/VelocidadEfectiva/hpeff.png)

![](/assets/images/VelocidadEfectiva/zetaeff.png)
</div>
Numéricamente, es exactamente la misma solución como se puede ver en su diferencia:
<div markdown = "1" class = "gallery">
![](/assets/images/VelocidadEfectiva/hpdiff.png)

![](/assets/images/VelocidadEfectiva/zetadiff.png)
</div>

Si han prestado atención no debería ser sorpresa alguna que las soluciones obtenidas con ambos métodos sean la misma. La forma en que se evalúa la velocidad efectiva lo hace así; tienen que ser equivalentes **por construcción**. Consecuentemente esto puede llevarlos a hacerse la pregunta: Si para construir la ecuación efectiva necesito evaluar la velocidad efectiva y esta misma está descrita en términos de las soluciones de la misma ecuación que quiero resolver, ¿Cuál es el punto de pasar a la ecuación efectiva? Dicho de otra forma, si ya resolví la ecuación, ¿Cuál es la utilidad del marco efectivo? Esta en efecto es la pregunta clave. Pero yo propongo lo siguiente:

**Imaginen** que no fuera necesario conocer la solución de las ecuaciones para definir una velocidad efectiva. Imaginen que con solo intuición física y empirismo se pudiera dar una forma aproximada de la velocidad efectiva. Esto es, usar el marco efectivo bajo una perspectiva fenomenológica.

En ese caso se habría encontrado una formulación alternativa al problema inicial, una formulación que tiene el potencial de ser más simple de resolver, si no analíticamente, tal vez computacionalmente.

Pero **Imaginación** es la palabra clave en esta situación, porque este escenario no es tan sencillo de reproducir como a uno le gustaría. El problema es que cuando, en cálculos analíticos de la velocidad efectiva obtienes monstruosidades como

$$
v_e^2 = \frac{\omega  \left(\omega  \left(k_x^2-k_y^2\right) e^{i t \omega_h} \int \frac{e^{2 i (\omega|\mathbf{r}-\mathbf{r'}|+\mathbf{k}.\mathbf{r'})}}{|\mathbf{r}-\mathbf{r'}|} \, d\mathbf{r'}-2 \pi  \omega_h e^{i (\mathbf{k_h}.\mathbf{r}+2 t \omega )}\right)}{\omega ^2 \left({k_x}^2-{k_y}^2\right) e^{i t {\omega_h}} \left(\int \frac{e^{2 i (\omega  |\mathbf{r}-\mathbf{r'}|+\mathbf{k}.\mathbf{r'})}}{|\mathbf{r}-\mathbf{r'}|} \, d \mathbf{r'}\right)+\pi  \left({k_x}^2-{k_y}^2\right) e^{i (2 \mathbf{k}.\mathbf{r}+t {\omega_h})}-2 \pi  \omega  {\omega_h} e^{i (\mathbf{k_h}.\mathbf{r}+2 t \omega )}} ,
$$

este no es el tipo de expresiones que te hagan pensar que pudiste llegar a ellas intuitivamente.

Tomemos por ejemplo las magnitudes de las velocidades efectivas de los campos del ejemplo anterior:
<div markdown="1" class = "slides">
![](/assets/images/VelocidadEfectiva/ceh.png)

![](/assets/images/VelocidadEfectiva/cezeta.png)
</div>

La única gráfica que pareciera tener una interpretación clara es la de $$h_{+}$$. Si recordamos, tomamos $$\epsilon \approx 0$$ por lo que, volviendo a su ecuación de movimiento, es como si no hubiera un termino de fuente. Por lo que se podría concluir que velocidades efectivas cercanas al constante valor de la velocidad de propagación natural de la onda(velocidad de la luz o 1 en este caso) nos hablan de momentos en que la interacción con el termino de fuente es ignorable.

Por otro lado, el termino de interacción de $$\zeta$$ no es ignorable y por lo tanto su velocidad efectiva es mucho más complicada. Desearía poder decir que la interpretación de la velocidad efectiva es que cada punto de la gráfica corresponde exactamente a la velocidad de traslación de la "señal" en ese momento, pero esto obviamente es muy ingenuo. "Velocidad efectiva" es un nombre engañoso, no solo esta cantidad también funciona como termino de amortiguamiento sino que es una función, no una constante, esto en ecuaciones diferenciales complica mucho las cosas.

La conclusión es que aún no poseo una interpretación clara de la cantidad $$v_{e}$$ más allá de decir "si es igual a 1 es porque la interacción es débil" o tal vez "si su derivada es grande, implica una interacción fuerte???".

Pero también esto no quiere decir que no exista una interpretación o forma intuitiva de obtener una expresión aproximada para ella, yo personalmente sospecho que la hay.

> No he dedicado significativo esfuerzo a interpretar la velocidad efectiva como para rendirme en que no existe alguna. Si hubiera introducido un intervalo de tiempo más grande en la gráfica de la velocidad efectiva de $$\zeta$$, observarían que esta tiende a asentarse a un comportamiento periódico, como el fenómeno mismo. También $$v_{e}$$ es una cantidad que puede ser compleja (en este ejemplo lo es), la posible interpretación de su fase como relacionada a la "dirección" no ha sido explorada.

### Geometría

Recapitulando, esencialmente lo que se hizo fue tomar un sistema interactuante o con fuente en un espacio-tiempo plano y se cambió nuestra perspectiva para verlo como un sistema sin fuente pero con coeficientes variables (o espacio-tiempo curvo). Esto indica que hay una forma geométrica de formular este marco.

$$
        \phi''-v_s^2\nabla^2\phi = \Pi(\mathbf{r},t) \to \phi''-2 \frac{v_e'(t,\mathbf{r})}{v_e(t,\mathbf{r})}\phi'-v_e(t,\mathbf{r})^2\nabla^2 \phi =0.
$$

En efecto, podemos pasar a trabajar con una "**métrica efectiva**" y un Lagrangiano efectivo:

$$
        \eta_{\mu\nu} = 
        \begin{pmatrix}
            c^2 & 0 \\
            0 & -\delta_{ij}
        \end{pmatrix}\to
        g^\mathrm{eff}_{\mu\nu} =
        \begin{pmatrix}
        c_e & 0 \\
        0 & -\frac{1}{c_e}\delta_{ij}
        \end{pmatrix},
$$

$$
        \mathcal{L}_{\mathrm{eff}} = \frac{1}{2}g_{\mathrm{eff}}^{\mu\nu}\partial_\mu\phi\partial_\nu\phi\,,
$$

que bajo un principio variacional clásico, retorna la ecuación efectiva

$$
            \longrightarrow\Box \phi = \frac{1}{\sqrt{-g_\mathrm{eff}}}\partial_\mu(\sqrt{-g_\mathrm{eff}}\partial^\mu\phi) = \phi''-2\frac{v_e'}{v_e}\phi'-v_e^2\nabla^2\phi = 0.
$$

Aunque no estoy escribiendo explícitamente las dependencias de $$c_{e}$$, recordemos que esta en general es una función muy complicada del espacio y el tiempo. No hemos explorado esto qué podría significar para otras cantidades geométricas como el escalar de curvatura obtenidas a partir de esta métrica inusual. Por ahora, esta es toda la geometría que consideraremos.

Con un Lagrangiano, una métrica y una acción, se puede definir un tensor de energía-momento. Este nos permite tener una discusión sobre las condiciones de energía

## Condiciones de energía

Las condiciones de energía son restricciones ad-hoc que la mayoría de físicos requerimos sobre distintas teorías de la materia. Estas condiciones son un intento por responder: ¿Por qué no observamos "cualquier cosa"? En otras palabras, empíricamente reconocemos que hay materia "bien comportada" (conservación de la energía, causalidad, masa positiva, etc.) y materia "mal comportada" (transporte de información superluminal, masa negativa, etc.). Las condiciones de energía intentan definir matemáticamente qué constituye que algo sea bien comportado.

Considérese por ejemplo las ecuaciones de Einstein:

$$
G_{\mu\nu} = 8\pi T_{\mu \nu},
$$

El problema leído de derecha a izquierda, es decir, dada una distribución de matería-energía $$T_{\mu \nu}$$, resuelva las ecuaciones diferenciales para obtener la métrica $$g_{\mu \nu}$$, es un problema complicado que normalmente requiere grandes suposiciones sobre la simétrica de la distribución.

El problema de izquierda a derecha, por otro lado, es trivial. Si yo me invento cualquier métrica Lorentziana y reemplazo en $$G_{\mu \nu}$$, esto me dará inmediatamente la distribución de materia-energía ($$T_{\mu \nu}$$) necesaria para que la ecuación sea valida. La pregunta es ahora si el $$T_{\mu \nu}$$ obtenido de esta forma es demasiado "exótico" para ser considerado realista físicamente y por ende, observable.

Las condiciones de energía nos ayudan a formalizar a qué nos referimos con "exótico", definen qué condiciones debe cumplir $$T_{\mu \nu}$$ para que otros físicos nos tomen enserio.

Las condiciones clásicas y más populares son cuatro:

> **Nula (NEC)**
Para todo vector nulo $$k^{a}$$:
>
$$
T_{mn}k^{m}k^{n} \geq{0}.
$$
>
 "La densidad de energía experimentada por un rayo de luz debe ser no negativa"

> **Débil (WEC)**
Para todo vector tipo tiempo $$t^{a}$$:
>
$$
T_{mn}t^{m}t^{n} \geq{0}.
$$
>
 "La densidad de energía local debe ser positiva para todo observador"

> **Fuerte (SEC)**
Para todo vector tipo tiempo $$t^{a}$$:
>
$$
\left( T_{mn}-\frac{1}{2}Tg_{mn} \right)t^{m}t^{n}\geq0.
$$
>
"La materia debe gravitar hacia materia, o la gravedad debe ser atrayente"

> **Dominante (DEC)**
Para todo par de vectores tipo tiempo co-orientados $$t^{a}$$ y $$\tau^{a}$$, $$T^{a}_{\,n}t^{n}$$ es causal y
>
$$
T_{mn}t^{m}\tau^{n}\geq 0.
$$
>
"La energía no puede fluir más rápido que la luz"

Recordemos que un vector nulo y tipo tiempo están definidos por $$g_{\mu \nu}k^{\mu}k^{\nu} = 0$$ y $$g_{\mu \nu}t^{\mu}t^{\nu}\geq0$$ respectivamente.

Estas condiciones poseen diversas formas de presentarse, aquí escojo la forma en términos del tensor $$T_{mn}$$ porque es más simple pensar en una interpretación física excepto en la SEC, debido a que esta condición es más una restricción sobre el tensor de Ricci $$R_{mn} = \left(T_{mn}-\frac{1}{2}Tg_{mn} \right)$$, su interpretación es geométrica y tiene que ver sobre cómo las geodésicas suficientemente cerca deben interceptar tarde o temprano.

Es importante clarificar que ninguna de estas condiciones son **leyes** per-se, todas se construyen de una forma ad-hoc. Históricamente nacen porque alguien quería demostrar algún teorema y realizaron ingeniería inversa para encontrar qué es lo mínimo que se tiene que asumir sobre la materia para poder demostrar lo que se quería demostrar. Ese mínimo que se debe asumir son las condiciones de energía.

Aunque a veces cause debate, no hay nada "fundamental" en estas condiciones a parte de definir lo que los humanos consideramos "normal" en el universo. Son tan poco fundamentales que se conocen cientos de situaciones donde se violan explícitamente. Tal vez se imaginen que son situaciones extravagantes como de mecánica cuántica, pero no. Incluso sistemas inocentes como campos escalares clásicos violan algunas de ellas, incluso las más débiles. La condición fuerte (SEC) está siendo violada ahora mismo por el mero hecho de que el universo se expande.

Aún así, incluso hoy en día son usadas por los físicos para decir cuándo algo está prohibido, como viaje superluminal o agujeros de gusano.

### Aplicación de ejemplo

Tomemos por ejemplo un ejercicio con una situación muy simplificada.

Sea un campo escalar que adopte la forma de un paquete Gaussiano esférico propagándose radialmente a una velocidad arbitraria $$c_{2}$$

$$
    \phi_g(t,r) =\frac{\phi_0}{r} \exp{\left[-\frac{(r-c_2t)^2}{\sigma^2}\right]}.
$$

No nos preocuparemos por exactamente el tipo de fenómeno que da como solución un campo de esta forma. Simplemente escogemos esta construcción como un medio efectivo, nos podemos imaginar que es una señal emitida por una fuente puntual en $$r=0$$. De hecho, con $$c_{2}=c$$, suficientemente alejados de la fuente y en el límite de campo débil, este paquete Gaussiano es solución de la ecuación de movimiento que se obtendría de ese fenómeno: $$\Box \phi = \ddot\phi-c^2\nabla^2\phi =0$$.

Pero imaginemos que por alguna razón, la señal no se propaga a $$c$$ sino a $$c_{2}$$ debido tal vez al efecto de interacción con algún campo de fondo. Definamos la función $$\Pi_{g}$$ como

$$
        \Pi_g(t,r) = c^2\,\Box\phi_g = \frac{2\phi_g(t,r)}{\sigma^4}\left(c_2^2-c^2\right) \left[2(r-c_2t)^2-\sigma ^2\right],
$$

**por construcción** el paquete $$\phi_{g}$$ es solución de una ecuación de onda con fuente $$\Pi_{g}$$:

$$
       \ddot\phi-c^2\nabla^2\phi = \Pi_g(t,r).
$$

Básicamente lo que acabamos de hacer es lo que comentaba antes acerca las ecuaciones de Einstein: en lugar de empezar a resolver de derecha a izquierda, tome la solución que quiero $$\phi_{g}$$ y al reemplazar obtengo la fuente que permite esa solución. Ahora, como decía antes, examinemos si esta fuente es "realista" usando las condiciones de energía.

La ecuación se pudo haber obtenido a partir del Lagrangiano

$$
        \mathcal{L} = \frac{1}{2}\left[\frac{\dot\phi^2}{c^2}-(\nabla \phi)^2+2\frac{\Pi \phi}{c^2}\right],
$$

y tiene el tensor de momento-energía de un campo escalar

$$
        T_{\mu\nu}~:=\partial_\mu \phi\partial_\nu \phi -g_{\mu\nu}\mathcal{L}
$$

$$
= \partial_\mu \phi\partial_\nu \phi - \frac{1}{2}
    \begin{pmatrix}
        c^2 & 0 \\
        0 & -\Omega_{ij}
    \end{pmatrix}
    \left[\frac{\dot{\phi}^2}{c^2}-(\nabla\phi)^2+\frac{2\Pi\phi}{c^2}\right],
$$

donde, porque estamos en coordenadas esféricas,

$$
\Omega = 
    \begin{pmatrix}
        1 & 0 & 0\\
        0 & r^{2} & 0 \\ 
		0 & 0 & r^{2}\sin^{2}(\theta)
    \end{pmatrix}.
$$

Con estos ingredientes consideramos las condiciones de energía y bajo qué parámetros del campo se cumplen o no.

Encontramos que la única condición de energía que se cumple trivialmente es la NEC, todas las demás son violadas si $$c_{2}$$ es diferente a la velocidad de la luz, esto es esperado. Cuando $$c_{2}=c$$, todas las condiciones de energía se cumplen y $$\Pi = 0$$.

| <br>                    | NEC | WEC                     | SEC                   | DEC                    |
| ----------------------- | --- | ----------------------- | --------------------- | ---------------------- |
| $$T_{\mu \nu}$$ Minkowski | ✅   | $$\times$$($$c_{2}\neq c$$) | $$\times(c_{2}\neq c)$$ | $$\times(c_{2}\neq{c})$$ |

### Pasando al cuadro efectivo

Bajo el mismo proceso detallado anteriormente pasamos al cuadro efectivo, esto es:

- La ecuación de onda se convierte en la ecuación efectiva, con los efectos de $$\Pi$$  codificados en $$c_e$$

$$
\ddot\phi-c^2\nabla^2\phi = \Pi_g(t,r) \to 
        \ddot\phi-2\frac{\dot{c_e}}{c_e}\dot\phi-c_e^2\nabla^2\phi = 0   \\
$$

- La métrica pasa de Minkowski a la métrica efectiva

$$
\eta_{\mu\nu} = 
        \begin{pmatrix}
            c^2 & 0 \\
            0 & -\Omega_{ij}
        \end{pmatrix}\to
        g^\mathrm{eff}_{\mu\nu} =
        \begin{pmatrix}
        c_e & 0 \\
        0 & -\frac{1}{c_e}\Omega_{ij}
        \end{pmatrix}\\
$$

- El Lagrangiano ahora es el Lagrangiano efectivo

$$
\mathcal{L} = \frac{1}{2}\left[\frac{\dot\phi^2}{c^2}-(\nabla \phi)^2+2\frac{\Pi \phi}{c^2}\right] \to 
        \mathcal{L}_{\mathrm{eff}} = \frac{1}{2}g_{\mathrm{eff}}^{\mu\nu}\partial_\mu\phi\partial_\nu\phi
$$

- Y finalmente, usando la definición variacional del tensor momento energía, obtenemos un tensor de momento-energía efectivo

$$
    T^{\mathrm{eff}}_{\mu\nu} =
    \partial_\mu \phi\partial_\nu \phi - 
    \frac{1}{2}
        \begin{pmatrix}
            c_e & 0 \\
            0 & -\frac{1}{c_e}\Omega_{ij}
        \end{pmatrix}
        \left(\frac{\dot{\phi}^2}{c_e}-c_e(\nabla\phi)^2\right).
$$

Usando la definición de $$c_e$$, obtenemos que es igual a la constante $$c_{2}$$

$$
        c_e^2 = c^2\left(1-\frac{\int \Pi \mathrm{dt}}{\dot{\phi_g}}\right)^{-1} 
        =c^2\left(\frac{c^2}{c_2^2}\right)^{-1}
        = c_2^2\,.
$$

Por lo tanto, no hay termino de amortiguamiento en la ecuación efectiva y es más claro cómo $$\phi_{g} = \frac{\phi_0}{r} \exp{\left[-\frac{(r-c_2t)^2}{\sigma^2}\right]}$$ es en efecto una solución de la ecuación efectiva.

Con estas redefiniciones repetimos el cálculo de las condiciones de energía, encontrando ahora que las condiciones de energía se cumplen para todos los valores de $$c_{2}$$

| <br>                         | NEC | WEC                     | SEC                   | DEC                    |
| ---------------------------- | --- | ----------------------- | --------------------- | ---------------------- |
| $$T_{\mu \nu}$$ Minkowski      | ✅   | $$\times$$($$c_{2}\neq c$$) | $$\times(c_{2}\neq c)$$ | $$\times(c_{2}\neq{c})$$ |
| $$T_{\mu \nu}^{\mathrm{eff}}$$ | ✅   | ✅<br>                   | ✅                     | $$?$$                    |

> Demostrar la satisfacción o violación de las condiciones de energía es más fácil de decir que de hacer, por cierto. Aquí es donde la mayoría del esfuerzo radica debido a que se debe demostrar la condición para todos los posibles vectores de tipo tiempo. La DEC tiene un interrogante porque técnicamente no la he demostrado aún, la condición es un poco más complicada que el resto pero a punta de vibras yo sé que también se satisface.

## Conclusión

Se tomó un campo escalar dado por un paquete Gaussiano que modela fenomenológicamente una señal $$X$$. Referente a las condiciones de energía encontramos que se violan si este campo no viaja a la velocidad de la luz $$c$$.

Pero al pasar al marco efectivo, que en teoría describe el mismo sistema, encontramos que no hay restricción alguna sobre los valores de la velocidad $$c_{2}$$.

Esto puede ser ya sea un comentario sobre la fisicidad del marco efectivo o un comentario más sobre la fundamentalidad de las condiciones de energía. Mi opinión personal es que es más lo primero debido a que la métrica efectiva es una cantidad definida para cada señal y sólo aplicable en el contexto de esta. Por lo tanto, no puede usarse como una métrica del espacio-tiempo y obtener conclusiones sobre las condiciones de energía.

Aún así, siento que puede haber algo de interés en la ecuación efectiva y su potencial para reescribir un problema en términos más simples o bajo una visión más fenomenológica. Sería interesante estudiar más propiedades sobre la velocidad efectiva y potencialmente desarrollar una intuición con ella. Adicionalmente, una formalización geométrica del marco efectivo puede ayudar a esclarecer la disyuntiva en las condiciones de energía.
