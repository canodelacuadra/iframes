try {
  console.log("Estamos en iframe: ", window.self !== window.top);
  console.log(
    "Si nos lo permite CORS, podemos ver la URL:",
    window.top.location
  );
} catch (e) {
  /* Las políticas "same origin" impiden que accedamos a window.top */
  console.log("Estamos en iframe");
}
