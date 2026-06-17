---
title: "Effective speed and energy conditions"
layout: post
categories: Article
lang: en
translation_key: VelocidadEfectiva
toc: true
banner: "![](/assets/images/VelocidadEfectiva/portada.png)"
---
This article refers to part of an investigation I did at the end of my Physics undergrad at the UdeA. It is basically a written version of a presentation I had to do as a graduation prerequisite.

Therefore, I don't make much effort to explain math and physics concepts that most non-physicist wouldn't be familiar with. It is assumed that the basics of calculus, differential equations and relativity are known. I get that this may be a hard ask, but the objective was more to capture this content anywhere in the internet (more about this in the next paragraph) and not so much to teach. I am nonetheless sorry for my detachment.

The reason I have to share this is that I've always been an advocator for more transparency in academia, more so in public institutions. I may talk more about my philosophy about this in another place, but in a few words what I believe in is that scientist should always try to be open and talk online about their projects. There should be an easy and direct way for the **public** to know what type of research are resources being used for. Of course, the work here is far from being inside that category of research (it was basically homework lol), but I share it anyway to start the good habits and give example.

My work was advised by the professor Antonio Enea Romano and in practice consisted of a variety of topics, effective speed was simply one of them. One of the outcomes was a preprint that can be found at [arXiv.2602.22023](https://doi.org/10.48550/arXiv.2602.22023), a slightly different and more personal version of the same article can be found at [energy-effective-gaussian](https://hdl.handle.net/10495/50940).

## Introduction

 The picture of the Effective Speed was introduced by Antonio E.R in [[2301.05679] Effective speed of cosmological perturbations](https://arxiv.org/abs/2301.05679). I spent a good amount of time studying it, verifying it and in general playing with it. My main interest was to find a more formal (probably geometric) formulation of it and/or a truly useful application. In the process we found that something interesting happens in the context of [energy conditions](https://en.wikipedia.org/wiki/Energy_condition); basically when one changes to the effective picture, conditions that were violated before are apparently satisfied in a trivial manner.

Next, I will delve deeper into these two concepts: Effective Speed and Energy Conditions.

## Effective speed

Take any wave equation, maybe there is even a damping term, additionally lets introduce a source term (right hand side of the equality):

$$
    \square\zeta = \zeta''+2\nu\zeta'-v_s^2\nabla^2\zeta = \Pi(\mathbf{r},t).
$$

This source term may stem from interaction with another field or some weird potential, it doesn't matter for our purposes.

Lets say now that $$\hat{\zeta}$$ is a solution of this equation and therefore it satisfies the identity

$$
    \hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -\Pi(\mathbf{r},t) =0,
$$

which we can manipulate towards an equivalent form like

$$
\hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -\left(\int_{-\infty}^{t} \Pi(\mathbf{r},\eta)  \mathrm{d}\eta  \right)'=0\\
$$

$$
    =\hat{\zeta}''+2\nu\hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta} -g'\\
$$

$$
=\left(\hat{\zeta}'(1-\frac{g}{\hat{\zeta}'}) \right)' +2\nu \hat{\zeta}'-v_s^2\nabla^2 \hat{\zeta}
$$

Where we have defined $$g$$ as the antiderivative of $$\Pi$$. Now, under the definition of **effective speed** as the quantity

$$
    v_e^2 = {v_s^2}\left(1-\frac{g}{\hat{\zeta}'}\right)^{-1},
$$

replacing in the previous equations and multiplying on both sides by $$\frac{v_{e}^{2}}{v_s^{2}}$$ one arrives at the equation

$$
\rightarrow \hat{\zeta}''+\hat{\zeta}'\left(2\nu\frac{v_e^2}{v_s^2} -2\frac{v_e'}{v_e}\right) -v_e^2\nabla^2 \hat{\zeta} =0.
$$

We can call the quantity in parenthesis effective damping coefficient $$\nu_{eff}$$ if we wish. The point is that we have arrived at an identity in terms of $$\hat{\zeta}$$, showing that the original solution $$\hat{\zeta}$$ also solves the homogeneous equation

$$
        \zeta''+2\nu_{\mathrm{eff} }\zeta'-v_e^2\nabla^2 \zeta =0,
$$

which we will call **effective equation**.

We can see the motivation behind naming $$v_{e}$$ "effective speed", it takes the rol of the constant $$v_{s}$$ in the original equation.

The effects of the source term have not disappeared, they are present in $$v_{e}$$ which is in general a function of time and space.

If you are familiar, this is similar to when one talks about [refractive index](https://en.wikipedia.org/wiki/Refractive_index) for electromagnetic waves. We say that a light ray's speed changes direction and magnitude when it is transmitted through a dielectric, but this is in someway an effective/phenomenological description of what is happening microscopically. Light always moves at "light speed" but inside a dielectric there is an innumerable number of interactions with the different components of the material, i.e., source terms. In fact, in the past I have wondered if it is possible to replicate this effective procedure with the [macroscopic Maxwell equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations) and see if one could recover the refractive index this way, I'm still unsure of how complex would that be.

You may be thinking that what we have done here is trivial, and that is because it is. But it is a triviality that works.

### Example application

We consider the situation that was initially the main motivation for the effective speed framework: The evolution of scalar and tensor perturbations in observational cosmology.

At low order these two type of perturbations are independent from one another and behave like [free fields](https://en.wikipedia.org/wiki/Free_field). At third order this stops being so: tensor and scalar perturbations couple and their evolution is described by the following equations:

$$
            \zeta''+2 \frac{z'}{z}\zeta'-\nabla^2\zeta=-2h_{ij}\partial_i\partial_j\zeta
$$

$$
            h_{ij}''+2 \mathcal{H} h_{ij}'-\nabla^2h_{ij}=\epsilon\partial_i\zeta\partial_j\zeta
$$

Nothing about understanding cosmological perturbations and their decomposition in scalar, vector and tensor modes is important in order to read this article. The one thing that matters is that you have some field which equation of motion takes the form of the wave equation (in this case the fields are $$\zeta$$ and the two polarizations of $$h_{ij}$$: $$h_{+}, h_{\times}$$) and that the corresponding equations of these fields have some source term. In this example the source term comes from mutual interaction between scalar and tensor perturbations ($$\zeta$$ y $$h_{ij}$$).

Given that there is a source term, we can characterize it with the effective speed. In practice it is simpler to solve the Fourier modes of the fields, so in reality the equations look like:

$$
            \zeta''+2 \frac{z'}{z}\zeta'+k^2\zeta=2h_{ij}k_i k_j\zeta
$$

$$
            h_{ij}''+2 \mathcal{H} h_{ij}'+k_h^2h_{ij}=-\epsilon k_i k_j\zeta^2
$$

The effective procedure is done in the exact same way, just now instead of space and time dependent effective speed, you have time and **momenta** dependent effective speed: $$v_{e}(t,\mathbf{r})\to v_{e}(t,\mathbf{k})$$.

Lets solve a simplified case where $$\epsilon \approx 0$$ ([De Sitter](https://en.wikipedia.org/wiki/De_Sitter_universe)). Numerically solving for the modes $$h_{+}$$ and $$\zeta$$ gives:

<div markdown ="1" class= "gallery">
![](/assets/images/VelocidadEfectiva/hp.png)

![](/assets/images/VelocidadEfectiva/zeta.png)
</div>

On the other hand, following the effective procedure and solving the corresponding effective equation gives
<div markdown= "1" class = "gallery">
![](/assets/images/VelocidadEfectiva/hpeff.png)

![](/assets/images/VelocidadEfectiva/zetaeff.png)
</div>
Numerically they are exactly the same solution, as we can see by computing their difference:
<div markdown = "1" class = "gallery">
![](/assets/images/VelocidadEfectiva/hpdiff.png)

![](/assets/images/VelocidadEfectiva/zetadiff.png)
</div>

If you have been paying attention, there is no surprise at all that both equations give the same solution. The way in which the effective speed is evaluated simply makes it that way, they have to be equivalent **by construction**. Consequently, this can make you ask the following question: If one needs the effective speed to compute the effective equation, and the effective speed is at the same time given in terms of the solutions of the same equation I want to solve; What is the point of going from the regular equation to the effective equation? In other way, if I have already solved the equation, what is the use of the effective picture?. This in fact is the key question, but i propose the following.

**Imagine** that it was not necessary to know the solution of the equations in order to define the effective speed. Imagine that based in physics intuition and empirical knowledge one could give and approximate form of the effective speed. This is like using the effective framework under a phenomenological perspective.

In that case you would have found an alternative formulation of the initial problem, a formulation that has the potential of being simpler to solve, if not analytically, maybe computationally.

But **Imagination** is indeed the key word in this situation, because this scenario is not as easy to reproduce as one would like.  The problem is that when, in analytical calculations of the effective speed, you obtain monstrosities like:

$$
v_e^2 = \frac{\omega  \left(\omega  \left(k_x^2-k_y^2\right) e^{i t \omega_h} \int \frac{e^{2 i (\omega|\mathbf{r}-\mathbf{r'}|+\mathbf{k}.\mathbf{r'})}}{|\mathbf{r}-\mathbf{r'}|} \, d\mathbf{r'}-2 \pi  \omega_h e^{i (\mathbf{k_h}.\mathbf{r}+2 t \omega )}\right)}{\omega ^2 \left({k_x}^2-{k_y}^2\right) e^{i t {\omega_h}} \left(\int \frac{e^{2 i (\omega  |\mathbf{r}-\mathbf{r'}|+\mathbf{k}.\mathbf{r'})}}{|\mathbf{r}-\mathbf{r'}|} \, d \mathbf{r'}\right)+\pi  \left({k_x}^2-{k_y}^2\right) e^{i (2 \mathbf{k}.\mathbf{r}+t {\omega_h})}-2 \pi  \omega  {\omega_h} e^{i (\mathbf{k_h}.\mathbf{r}+2 t \omega )}} ,
$$

and so on, this is not the type of expressions that makes you think "ah of course, that makes sense."

To illustrate the point further, lets look at the magnitude of the effective speed for the fields calculated in the previous example:
<div markdown="1" class = "slides">
![](/assets/images/VelocidadEfectiva/ceh.png)

![](/assets/images/VelocidadEfectiva/cezeta.png)
</div>

We see that the only graphic that looks like it may have a clear interpretation is the one for $$h_{+}$$. If we recall, we took $$\epsilon \approx 0$$ so if we take a look at its equation of motion, it is like there wasn't a source term at all. We could conclude that effective speeds that are in magnitude close to the natural value of the speed of the problem (light speed or 1 in this case) tells us about moments in which the interaction with the source term can be neglected.

On the other hand, the interaction term for $$\zeta$$ is not negligible and its effective speed is much more complicated. I wish i could say that the interpretation of effective speed is as simple as looking at the plot and saying that each point corresponds to the actual translational speed of the signal in that instant, this is obviously way too naive. "Effective speed" is a misleading term, not only this quantity also acts as a damping term, it is also a function, which complicates things in partial differential equations.

The conclusion is that I am yet to have a clear interpretation and thus intuition of the quantity $$v_{e}$$ that is more than just saying "if it is equal to 1 it is because the interaction is weak" or "if it changes a lot it implies a strong interaction… maybe".

But this doesn't imply that there doesn't exist an interpretation or intuitive way of constructing an effective speed, I personally suspect there is.

> I have not taken significant effort in looking for an interpretation of the effective speed that justifies giving up on thinking that there exists one. If I had shown a bigger time interval in the plot for the effective speed of $$\zeta$$, one would observe that its behavior tends to settle towards being periodic, like the phenomena itself. Also, $$v_{e}$$ is a complex quantity (in this example it is), the possible interpretation of its phase and its relation to "direction" of propagation haven't been explored.

### Geometry

To summarize, essentially what we have done was to take an interacting system in a flat space-time and adjusted our perspective to see it as an non-interactive system with variable coefficients (which can be seen as working in curved spacetime). Therefore there must be a way to formulate the whole picture in a purely geometric way.

$$
        \phi''-v_s^2\nabla^2\phi = \Pi(\mathbf{r},t) \to \phi''-2 \frac{v_e'(t,\mathbf{r})}{v_e(t,\mathbf{r})}\phi'-v_e(t,\mathbf{r})^2\nabla^2 \phi =0.
$$

In fact, we can work with an "**effective metric**" and an effective Lagrangian:

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

which under the standard variational principle gives us the effective equation

$$
            \longrightarrow\Box \phi = \frac{1}{\sqrt{-g_\mathrm{eff}}}\partial_\mu(\sqrt{-g_\mathrm{eff}}\partial^\mu\phi) = \phi''-2\frac{v_e'}{v_e}\phi'-v_e^2\nabla^2\phi = 0.
$$

Even though I'm not writing explicitly the $$c_{e}$$  dependencies, we must not forget that in general it is a complicated function of spacetime variables. We are not going to explore here how this could show up in the other geometric quantities like the curvature. For now, this is all the geometry we are going to consider.

With a Lagrangian, a metric and an action, we can define a stress-energy tensor. This allows us to talk now about the energy conditions.

## Energy conditions

The energy conditions are ad-hoc restrictions that the majority of physicist demand for in any theory of matter. These conditions try to answer the question "why don't we see any type of stuff?". In other words, empirically we recognize that there is "good behaved" matter (we talk of things like energy conservation, causality, mass positivity, etc.) and "bad behaved" matter (superluminal propagation of information, negative mass, etc.). Energy conditions try to formally define what constitutes "good behavior" of matter.

Lets consider for example the Einstein equations:

$$
G_{\mu\nu} = 8\pi T_{\mu \nu},
$$

Parsed from right to left, i.e. given an energy-matter distribution $$T_{\mu \nu}$$, solve the differential equations to obtain the metric $$g_{\mu \nu}$$, is a complex problem that normally requires many assumptions about the symmetry of the distribution.

But the left-to-right problem on the other hand can be quite trivial. If we come up with any Lorentzian metric and replace in $$G_{\mu \nu}$$, this immediately gives me the energy-matter distribution $$T_{\mu \nu}$$ necessary so that the whole equation is valid. The question now would be one of "Is the $$T_{\mu \nu}$$ obtained this way too exotic to be considered realistic and thus, observable?"

The energy conditions help us formalize what we mean with "exotic", they define what conditions $$T_{\mu \nu}$$ must satisfy so that other physicist take us seriously.

The classic and most popular conditions are four:

> **Null (NEC)**
For every null vector $$k^{a}$$:
>
$$
T_{mn}k^{m}k^{n} \geq{0}.
$$
 >
 "The energy density experimented by a light ray must be positive"

> **Weak (WEC)**
For every time-like vector $$t^{a}$$:
>
$$
T_{mn}t^{m}t^{n} \geq{0}.
$$
>
 "The energy density must be positive for every observer"

> **Strong (SEC)**
For every time-like vector $$t^{a}$$:
>
$$
\left( T_{mn}-\frac{1}{2}Tg_{mn} \right)t^{m}t^{n}\geq0.
$$
>
"Matter must gravitate towards matter, i.e. gravity is attractive"

> **Dominant (DEC)**
For every two co-oriented time-like vectors $$t^{a}$$ and $$\tau^{a}$$, $$T^{a}_{\,n}t^{n}$$ is casual and
>
$$
T_{mn}t^{m}\tau^{n}\geq 0.
$$
>
"Energy cannot flow faster than light"

Remember than null and time-like vectors are defined by $$g_{\mu \nu}k^{\mu}k^{\nu} = 0$$ and $$g_{\mu \nu}t^{\mu}t^{\nu}\geq0$$ respectively.

This prerequisites can be represented in a multitude of ways, I chose here the one in which $$T_{\mu \nu}$$ is the protagonist because it is simpler to think of a physical interpretation with the exception of the SEC, since it is more of a restriction on the Ricci tensor $$R_{mn} = \left(T_{mn}-\frac{1}{2}Tg_{mn} \right)$$, its interpretation is geometric and related with how close enough geodesics must intercept sooner or later.

It is important to clarify that none of these conditions are **laws** per-se, every one of them are given in an ad-hoc way. Historically they came about because someone wanted to prove some theorem and did a little bit of inverse engineering to find out what is the minimal prerequisite necessary to prove the theorem. This minimal assumption is one or multiple energy conditions.

Even though sometimes this can cause debate, there is nothing fundamental about these conditions except defining what we humans think is "normal" in the universe. They lack so much underlying fundamentality that we know of hundreds of situations in which they are explicitly violated. The reader may think that those situations must be some niche quantum experiment but no. Even innocent looking classical scalar fields don't satisfy the weaker conditions. The strong energy condition (SEC) is being violated right now by the fact that the universe expands.

Still, today they are nonetheless used by many physicist to say that some things are prohibited, like superluminal travel or wormholes.

### Example application

Lets take as an example a very simplified scenario.

Consider a scalar field that takes the form of a spherical Gaussian Wave Packet (GWP) propagating at some arbitrary velocity $$c_{2}$$.

$$
    \phi_g(t,r) =\frac{\phi_0}{r} \exp{\left[-\frac{(r-c_2t)^2}{\sigma^2}\right]}.
$$

We don't concern ourselves with exactly what type of phenomena  results in a field with such form. We simply chose this construction as an effective tool. We can imagine that it is a signal emitted by a source point at $$r = 0$$. In fact, with $$c_{2} = c$$, sufficiently far away from the source and in the weak field limit, this Gaussian wave Packet is solution to the corresponding equation of motion: $$\Box \phi = \ddot\phi-c^2\nabla^2\phi =0$$.

But lets imagine that, for some reason, the signal does not propagate at $$c$$ but at $$c_{2}$$ instead, this as a result of its interaction with some other background field. Lets define the function $$\Pi_{g}$$ as

$$
        \Pi_g(t,r) = c^2\,\Box\phi_g = \frac{2\phi_g(t,r)}{\sigma^4}\left(c_2^2-c^2\right) \left[2(r-c_2t)^2-\sigma ^2\right],
$$

**by construction** the GWP $$\phi_{g}$$ is a solution of the wave equation with source $$\Pi_{g}$$:

$$
       \ddot\phi-c^2\nabla^2\phi = \Pi_g(t,r).
$$

Basically we have done what we discussed before about the Einstein equations: Instead of solving right-to-left, we took the form we want ($$\phi_{g}$$) and replaced on the left to obtain the source that allows that form as a solution. Now, like before, lets examine if this source is "realistic" using the energy conditions.

The equation could have been obtained from the following Lagrangian

$$
        \mathcal{L} = \frac{1}{2}\left[\frac{\dot\phi^2}{c^2}-(\nabla \phi)^2+2\frac{\Pi \phi}{c^2}\right],
$$

and has the stress-energy tensor of a scalar field

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

where, because we are in spherical coordinates:

$$
\Omega = 
    \begin{pmatrix}
        1 & 0 & 0\\
        0 & r^{2} & 0 \\ 
		0 & 0 & r^{2}\sin^{2}(\theta)
    \end{pmatrix}.
$$

With these ingredients we considere the energy conditions and under which parameters of the field they are satisfied or violated.

We found that the only energy condition that is trivially satisfied is the NEC, every other one is violated if $$c_{2}$$ is different from the speed of light, is is expected. When $$c_{2} = c$$ every conditions is satisfied and $$\Pi = 0$$.

| <br>                    | NEC | WEC                     | SEC                   | DEC                    |
| ----------------------- | --- | ----------------------- | --------------------- | ---------------------- |
| $$T_{\mu \nu}$$ Minkowski | ✅   | $$\times$$($$c_{2}\neq c$$) | $$\times(c_{2}\neq c)$$ | $$\times(c_{2}\neq{c})$$ |

### Changing to the effective picture

We now proceed with the exact same routine detailed before, that is:

- The wave equation is now the effective equation, with the effects of $$\Pi$$ represented in $$c_{e}$$

$$
\ddot\phi-c^2\nabla^2\phi = \Pi_g(t,r) \to 
        \ddot\phi-2\frac{\dot{c_e}}{c_e}\dot\phi-c_e^2\nabla^2\phi = 0   \\
$$

- The metric changes from Minkowski to the effective metric

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

- The lagrangian is now the effective Lagrangian

$$
\mathcal{L} = \frac{1}{2}\left[\frac{\dot\phi^2}{c^2}-(\nabla \phi)^2+2\frac{\Pi \phi}{c^2}\right] \to 
        \mathcal{L}_{\mathrm{eff}} = \frac{1}{2}g_{\mathrm{eff}}^{\mu\nu}\partial_\mu\phi\partial_\nu\phi
$$

- Finally, using the variational definition of stress-energy tensor, we obtain its effective counterpart

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

With the provided definition of $$c_{e}$$ we obtain that it is equal to the constant $$c_{2}$$

$$
        c_e^2 = c^2\left(1-\frac{\int \Pi \mathrm{dt}}{\dot{\phi_g}}\right)^{-1} 
        =c^2\left(\frac{c^2}{c_2^2}\right)^{-1}
        = c_2^2\,.
$$

Consequently, there is no damping term in the effective equation and it is more clear how $$\phi_{g} = \frac{\phi_0}{r} \exp{\left[-\frac{(r-c_2t)^2}{\sigma^2}\right]}$$ is indeed a solution to the effective equation.

Under these redefinitions we assessed again the energy conditions, finding that apparently all values of $$c_{2}$$ are now "allowed".

| <br>                         | NEC | WEC                     | SEC                   | DEC                    |
| ---------------------------- | --- | ----------------------- | --------------------- | ---------------------- |
| $$T_{\mu \nu}$$ Minkowski      | ✅   | $$\times$$($$c_{2}\neq c$$) | $$\times(c_{2}\neq c)$$ | $$\times(c_{2}\neq{c})$$ |
| $$T_{\mu \nu}^{\mathrm{eff}}$$ | ✅   | ✅<br>                   | ✅                     | $$?$$                    |

> To show the satisfaction or violation of the energy conditions is easier said than done, by the way. Here is where most of the effort lays since one needs to show that the condition is satisfied for all possible time-like vectors. The DEC has a question mark because it technically hasn't been proved yet since it is a little more complicated than the rest. If proof by vibes were allowed, I would say it is satisfied too.

## Conclusion

We took a scalar field given by a Gaussian wave packet that models some signal $$X$$. In relation to the energy conditions we found that they are violated if this field doesn't travel at the speed of light.

But when working with the effective picture which in theory describes the same system, we found that there is no restriction whatsoever upon the values the velocity of propagation can take.

This can either be a comment about how physical the effective picture really is or one about the underlying formulation of the energy conditions. My personal opinion is that it is more the former than the latter, given that the effective metric is defined in a signal by signal basis and in theory only applicable in its context. Therefore, the effective metric cannot be used as a spacetime metric from which we can draw conclusions about the energy conditions.

Nevertheless, I feel there can be something of interest in the effective equation and its potential to describe a problem in simpler terms with a phenomenological light. It would be interesting to study more properties about the effective speed and potentially develop some intuition about it. Additionally, a geometric formalization of the effective field can help clarify the disjunctive nature of the conclusions about the energy conditions.
