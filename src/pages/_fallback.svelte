<script>
    import { url } from '@roxi/routify'
</script>

<style>
  .huge {
    font-size: 12rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<div class="e404">
  <div class="huge">404</div>
  <div class="big">Pagina no encontrada
  <!-- link to the parent folder of _fallback.svelte -->
  <a href={$url('../')}>Volver atras</a>
  </div>
</div>
