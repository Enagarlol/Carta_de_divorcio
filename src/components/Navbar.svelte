<script>
  import { url, isActive } from "@roxi/routify";

  const _links = [
    ["/card", "INICIO"],
    ["./card", "Mi Credencial"],
    ["./tramites", "Tramites"],
    ["./extraInfo", "InfoExtra"],
  ];
</script>

<aside>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="../public/favicon.ico"
          alt=""
          width="50"
          height="50"
          class="d-inline-block align-text-top"
        />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          {#each _links as [path, name]}
            <li class="nav-item">
              <a
                class="nav-link"
                class:active={$isActive(path)}
                href={$url(path)}
              >
                {name}
              </a>
            </li>
          {/each}
        </ul>
        <li class="nav-item dropdown d-flex dropstart">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="../public/chepe (2).png"
              alt=""
              width="50"
              height="50"
              class="d-inline-block align-text-middle"
            />
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Perfil</a>
            <div class="dropdown-divider" />
            <a class="dropdown-item" href="#">Cerrar Sesion</a>
          </div>
        </li>
      </div>
    </div>
  </nav>
</aside>

<style>
  aside {
    text-align: center;
  }
  nav {
    background: white;
  }
</style>
