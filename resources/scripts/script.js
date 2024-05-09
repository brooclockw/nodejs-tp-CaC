window.addEventListener('resize', function() {
    const aside = document.getElementById('filter-aside');
    const windowWidth = window.innerWidth;

    // Si el ancho de la ventana es menor que el breakpoint del menú hamburguesa (por ejemplo, 768px)
    if (windowWidth <= 776) {
      aside.classList.add('d-none');
    } else {
      aside.classList.remove('d-none');
    }
  });
  //------------------------------------------------------------------------------------------------------//
  const asideFilter = document.getElementById('filter-aside');
  const btnFilter = document.getElementById('toggleAsideButton');

  function showAside() {
    asideFilter.classList.remove('d-none');
  }

  function hideAside() {
    asideFilter.classList.add('d-none');
  }

  // Función para manejar el clic en el botón para mostrar/ocultar el aside
  btnFilter.addEventListener('click', () => {
    if (asideFilter.classList.contains('d-none')) {
      showAside();
    } else {
      hideAside();
    }
  });

  // Función para ocultar el aside cuando se haga clic en cualquier parte de la página
  document.addEventListener('click', (event) => {
    if (!asideFilter.contains(event.target) && !btnFilter.contains(event.target)) {
      hideAside();
    }
  });

  // Suponiendo que tienes una función para aplicar filtros
  function aplicarFiltros() {
    // Lógica para aplicar filtros
    // Después de aplicar los filtros, ocultamos el aside
    hideAside();
  }

  // Suponiendo que tienes un botón para aplicar filtros
  /*
  const aplicarFiltrosButton = document.getElementById('aplicarFiltrosButton');
  aplicarFiltrosButton.addEventListener('click', aplicarFiltros);const aside = document.getElementById('aside');
  const toggleAsideButton = document.getElementById('toggleAsideButton');
*/
  function showAside() {
    asideFilter.classList.remove('d-none');
  }

  function hideAside() {
    asideFilter.classList.add('d-none');
  }

  // Función para manejar el clic en el botón para mostrar/ocultar el aside
  btnFilter.addEventListener('click', () => {
    if (aside.classList.contains('d-none')) {
      showAside();
    } else {
      hideAside();
    }
  });

  // Función para ocultar el aside cuando se haga clic en cualquier parte de la página
  document.addEventListener('click', (event) => {
    if (!asideFilter.contains(event.target) && !btnFilter.contains(event.target)) {
      hideAside();
    }
  });

  // Suponiendo que tienes una función para aplicar filtros
  function aplicarFiltros() {
    // Lógica para aplicar filtros
    // Después de aplicar los filtros, ocultamos el aside
    hideAside();
  }
  /*
  // Suponiendo que tienes un botón para aplicar filtros
  const aplicarFiltrosButton = document.getElementById('aplicarFiltrosButton');
  aplicarFiltrosButton.addEventListener('click', aplicarFiltros);*/